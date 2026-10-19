

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


describe('RegionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when POKEAPI_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('POKEAPI_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PokeapiSdkSDK.test()
    const ent = testsdk.Region()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('region hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of PokeapiSdkSDK.test(offline).Region().stream('list')) { }
    }, /offline/)

    for await (const _item of PokeapiSdkSDK.test(offline).Region()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = PokeapiSdkSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Region().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of PokeapiSdkSDK.test().Region().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new PokeapiSdkSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Region().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Region().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = PokeapiSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Region().list({"limit":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.POKEAPI_SDK_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'region.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":0},"locations":{"a":true,"h":"Locations","n":"locations","r":true,"ro":true,"t":"`$ARRAY`","key$":"locations","index$":1},"main_generation":{"a":true,"h":"Main Generation","n":"main_generation","r":true,"ro":true,"t":"`$ANY`","key$":"main_generation","index$":2},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":3},"names":{"a":true,"h":"Names","n":"names","r":true,"ro":true,"t":"`$ARRAY`","key$":"names","index$":4},"pokedexes":{"a":true,"h":"Pokedexes","n":"pokedexes","r":true,"ro":true,"t":"`$ARRAY`","key$":"pokedexes","index$":5},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":true,"ro":true,"t":"`$STRING`","key$":"url","index$":6},"version_groups":{"a":true,"h":"Version Groups","n":"version_groups","r":true,"ro":true,"t":"`$ARRAY`","key$":"version_groups","index$":7}},"id":{"field":"id","name":"id"},"name":"region","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v2/region/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v2/region/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v2"},{"lit":"region"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v2/region/{id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v2/region/{id}/","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v2"},{"lit":"region"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"region","name__orig":"region","Name":"Region","name_":"region","name-":"region","NAME":"REGION","index$":43}, {"active":true,"entity":"region","key$":"BasicRegionFlow","kind":"basic","name":"BasicRegionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"region_ref01"}}]},{"a":true,"d":{},"i":{"ref":"region_ref01","srcdatavar":"region_ref01_data","suffix":"_dt0"},"m":{"id":"region01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-region_ref01"}}]}]}, 'Region', {"GET /api/v2/region/":{"protocol":"http","parameters":[{"name":"limit","required":false,"in":"query","description":"Number of results to return per page.","schema":{"type":"integer"},"index$":0},{"name":"offset","required":false,"in":"query","description":"The initial index from which to return the results.","schema":{"type":"integer"},"index$":1},{"in":"query","name":"q","schema":{"type":"string"},"description":"> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ","index$":2}]},"GET /api/v2/region/{id}/":{"protocol":"http","parameters":[{"in":"path","name":"id","schema":{"type":"string"},"description":"This parameter can be a string or an integer.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let region_ref01_data = Object.values(setup.data.existing.region)[0] as any

    // LIST
    const region_ref01_ent = client.Region()
    const region_ref01_match: any = {}

    const region_ref01_list = (await region_ref01_ent.list(region_ref01_match)).map((e: any) => e.data())


    // LOAD
    const region_ref01_match_dt0: any = {}
    region_ref01_match_dt0.id = region_ref01_data.id
    const region_ref01_data_dt0 = (await region_ref01_ent.load(region_ref01_match_dt0)).data()
    assert(region_ref01_data_dt0.id === region_ref01_data.id)


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
      '../../../../.sdk/test/entity/region/RegionTestData.json')

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
    ['region01','region02','region03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'POKEAPI_SDK_TEST_REGION_ENTID': idmap,
    'POKEAPI_SDK_TEST_LIVE': 'FALSE',
    'POKEAPI_SDK_TEST_EXPLAIN': 'FALSE',
    'POKEAPI_SDK_APIKEY': '',
  })

  idmap = env['POKEAPI_SDK_TEST_REGION_ENTID']

  const live = 'TRUE' === env.POKEAPI_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['POKEAPI_SDK_TEST_REGION_ENTID']
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
  
