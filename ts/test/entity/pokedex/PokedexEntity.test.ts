

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { PokeapiSdkSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('PokedexEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when POKEAPI_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('POKEAPI_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PokeapiSdkSDK.test()
    const ent = testsdk.Pokedex()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('pokedex hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of PokeapiSdkSDK.test(offline).Pokedex().stream('list')) { }
    }, /offline/)

    for await (const _item of PokeapiSdkSDK.test(offline).Pokedex()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = PokeapiSdkSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Pokedex().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of PokeapiSdkSDK.test().Pokedex().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new PokeapiSdkSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Pokedex().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Pokedex().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = PokeapiSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Pokedex().list({"limit":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.POKEAPI_SDK_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'pokedex.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"descriptions":{"a":true,"h":"Descriptions","n":"descriptions","r":true,"ro":true,"t":"`$ARRAY`","key$":"descriptions","index$":0},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":1},"is_main_series":{"a":true,"h":"Is Main Series","n":"is_main_series","r":false,"t":"`$BOOLEAN`","key$":"is_main_series","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":3},"names":{"a":true,"h":"Names","n":"names","r":true,"ro":true,"t":"`$ARRAY`","key$":"names","index$":4},"pokemon_entries":{"a":true,"h":"Pokemon Entries","n":"pokemon_entries","r":true,"ro":true,"t":"`$ARRAY`","key$":"pokemon_entries","index$":5},"region":{"a":true,"h":"Region","n":"region","r":true,"t":"`$OBJECT`","key$":"region","index$":6},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":true,"ro":true,"t":"`$STRING`","key$":"url","index$":7},"version_groups":{"a":true,"h":"Version Groups","n":"version_groups","r":true,"ro":true,"t":"`$ARRAY`","key$":"version_groups","index$":8}},"id":{"field":"id","name":"id"},"name":"pokedex","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v2/pokedex/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v2/pokedex/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v2"},{"lit":"pokedex"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v2/pokedex/{id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v2/pokedex/{id}/","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v2"},{"lit":"pokedex"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"pokedex","name__orig":"pokedex","Name":"Pokedex","name_":"pokedex","name-":"pokedex","NAME":"POKEDEX","index$":35}, {"active":true,"entity":"pokedex","key$":"BasicPokedexFlow","kind":"basic","name":"BasicPokedexFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"pokedex_ref01"}}]},{"a":true,"d":{},"i":{"ref":"pokedex_ref01","srcdatavar":"pokedex_ref01_data","suffix":"_dt0"},"m":{"id":"pokedex01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pokedex_ref01"}}]}]}, 'Pokedex', {"GET /api/v2/pokedex/":{"protocol":"http","parameters":[{"name":"limit","required":false,"in":"query","description":"Number of results to return per page.","schema":{"type":"integer"},"index$":0},{"name":"offset","required":false,"in":"query","description":"The initial index from which to return the results.","schema":{"type":"integer"},"index$":1},{"in":"query","name":"q","schema":{"type":"string"},"description":"> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ","index$":2}]},"GET /api/v2/pokedex/{id}/":{"protocol":"http","parameters":[{"in":"path","name":"id","schema":{"type":"string"},"description":"This parameter can be a string or an integer.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let pokedex_ref01_data = Object.values(setup.data.existing.pokedex)[0] as any

    // LIST
    const pokedex_ref01_ent = client.Pokedex()
    const pokedex_ref01_match: any = {}

    const pokedex_ref01_list = (await pokedex_ref01_ent.list(pokedex_ref01_match)).map((e: any) => e.data())


    // LOAD
    const pokedex_ref01_match_dt0: any = {}
    pokedex_ref01_match_dt0.id = pokedex_ref01_data.id
    const pokedex_ref01_data_dt0 = (await pokedex_ref01_ent.load(pokedex_ref01_match_dt0)).data()
    assert(pokedex_ref01_data_dt0.id === pokedex_ref01_data.id)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/pokedex/PokedexTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = PokeapiSdkSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['pokedex01','pokedex02','pokedex03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'POKEAPI_SDK_TEST_POKEDEX_ENTID': idmap,
    'POKEAPI_SDK_TEST_LIVE': 'FALSE',
    'POKEAPI_SDK_TEST_EXPLAIN': 'FALSE',
    'POKEAPI_SDK_APIKEY': '',
  })

  idmap = env['POKEAPI_SDK_TEST_POKEDEX_ENTID']

  const live = 'TRUE' === env.POKEAPI_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['POKEAPI_SDK_TEST_POKEDEX_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new PokeapiSdkSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.POKEAPI_SDK_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.POKEAPI_SDK_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
