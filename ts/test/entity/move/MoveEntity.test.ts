

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


describe('MoveEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when POKEAPI_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('POKEAPI_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PokeapiSdkSDK.test()
    const ent = testsdk.Move()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('move hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of PokeapiSdkSDK.test(offline).Move().stream('list')) { }
    }, /offline/)

    for await (const _item of PokeapiSdkSDK.test(offline).Move()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = PokeapiSdkSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Move().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of PokeapiSdkSDK.test().Move().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new PokeapiSdkSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Move().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Move().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = PokeapiSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Move().list({"limit":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.POKEAPI_SDK_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'move.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"accuracy":{"a":true,"h":"Accuracy","n":"accuracy","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"accuracy","index$":0},"contest_combos":{"a":true,"h":"Contest Combos","n":"contest_combos","r":true,"ro":true,"t":"`$ANY`","key$":"contest_combos","index$":1},"contest_effect":{"a":true,"h":"Contest Effect","n":"contest_effect","r":true,"t":"`$OBJECT`","key$":"contest_effect","index$":2},"contest_type":{"a":true,"h":"Contest Type","n":"contest_type","r":true,"t":"`$OBJECT`","key$":"contest_type","index$":3},"damage_class":{"a":true,"h":"Damage Class","n":"damage_class","r":true,"t":"`$OBJECT`","key$":"damage_class","index$":4},"descriptions":{"a":true,"h":"Descriptions","n":"descriptions","r":true,"ro":true,"t":"`$ARRAY`","key$":"descriptions","index$":5},"effect_chance":{"a":true,"h":"Effect Chance","n":"effect_chance","r":true,"t":"`$INTEGER`","key$":"effect_chance","index$":6},"effect_changes":{"a":true,"h":"Effect Changes","n":"effect_changes","r":true,"ro":true,"t":"`$ARRAY`","key$":"effect_changes","index$":7},"effect_entries":{"a":true,"h":"Effect Entries","n":"effect_entries","r":true,"ro":true,"t":"`$ARRAY`","key$":"effect_entries","index$":8},"flavor_text_entries":{"a":true,"h":"Flavor Text Entries","n":"flavor_text_entries","r":true,"ro":true,"t":"`$ARRAY`","key$":"flavor_text_entries","index$":9},"generation":{"a":true,"h":"Generation","n":"generation","r":true,"t":"`$OBJECT`","key$":"generation","index$":10},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":11},"learned_by_pokemon":{"a":true,"h":"Learned By Pokemon","n":"learned_by_pokemon","r":true,"ro":true,"t":"`$ARRAY`","key$":"learned_by_pokemon","index$":12},"machines":{"a":true,"h":"Machines","n":"machines","r":true,"ro":true,"t":"`$ARRAY`","key$":"machines","index$":13},"meta":{"a":true,"h":"Meta","n":"meta","r":true,"ro":true,"t":"`$ANY`","key$":"meta","index$":14},"moves":{"a":true,"h":"Moves","n":"moves","r":true,"ro":true,"t":"`$ARRAY`","key$":"moves","index$":15},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":16},"names":{"a":true,"h":"Names","n":"names","r":true,"ro":true,"t":"`$ARRAY`","key$":"names","index$":17},"past_values":{"a":true,"h":"Past Values","n":"past_values","r":true,"ro":true,"t":"`$ARRAY`","key$":"past_values","index$":18},"power":{"a":true,"h":"Power","n":"power","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"power","index$":19},"pp":{"a":true,"h":"Pp","n":"pp","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"pp","index$":20},"priority":{"a":true,"h":"Priority","n":"priority","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"priority","index$":21},"stat_changes":{"a":true,"h":"Stat Changes","n":"stat_changes","r":true,"ro":true,"t":"`$ARRAY`","key$":"stat_changes","index$":22},"super_contest_effect":{"a":true,"h":"Super Contest Effect","n":"super_contest_effect","r":true,"t":"`$OBJECT`","key$":"super_contest_effect","index$":23},"target":{"a":true,"h":"Target","n":"target","r":true,"t":"`$OBJECT`","key$":"target","index$":24},"type":{"a":true,"h":"Type","n":"type","r":true,"t":"`$OBJECT`","key$":"type","index$":25},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":true,"ro":true,"t":"`$STRING`","key$":"url","index$":26}},"id":{"field":"id","name":"id"},"name":"move","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v2/move-ailment/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v2/move-ailment/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v2"},{"lit":"move-ailment"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0},{"a":true,"co":{"id":"GET /api/v2/move-category/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v2/move-category/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v2"},{"lit":"move-category"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":1},{"a":true,"co":{"id":"GET /api/v2/move/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v2/move/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v2"},{"lit":"move"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v2/move-ailment/{id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v2/move-ailment/{id}/","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v2"},{"lit":"move-ailment"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v2/move-category/{id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v2/move-category/{id}/","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v2"},{"lit":"move-category"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v2/move/{id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v2/move/{id}/","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v2"},{"lit":"move"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"move","name__orig":"move","Name":"Move","name_":"move","name-":"move","NAME":"MOVE","index$":27}, {"active":true,"entity":"move","key$":"BasicMoveFlow","kind":"basic","name":"BasicMoveFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"move_ref01"}}]},{"a":true,"d":{},"i":{"ref":"move_ref01","srcdatavar":"move_ref01_data","suffix":"_dt0"},"m":{"id":"move01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-move_ref01"}}]}]}, 'Move', {"GET /api/v2/move-ailment/":{"protocol":"http","parameters":[{"name":"limit","required":false,"in":"query","description":"Number of results to return per page.","schema":{"type":"integer"},"index$":0},{"name":"offset","required":false,"in":"query","description":"The initial index from which to return the results.","schema":{"type":"integer"},"index$":1},{"in":"query","name":"q","schema":{"type":"string"},"description":"> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ","index$":2}]},"GET /api/v2/move-category/":{"protocol":"http","parameters":[{"name":"limit","required":false,"in":"query","description":"Number of results to return per page.","schema":{"type":"integer"},"index$":0},{"name":"offset","required":false,"in":"query","description":"The initial index from which to return the results.","schema":{"type":"integer"},"index$":1},{"in":"query","name":"q","schema":{"type":"string"},"description":"> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ","index$":2}]},"GET /api/v2/move/":{"protocol":"http","parameters":[{"name":"limit","required":false,"in":"query","description":"Number of results to return per page.","schema":{"type":"integer"},"index$":0},{"name":"offset","required":false,"in":"query","description":"The initial index from which to return the results.","schema":{"type":"integer"},"index$":1},{"in":"query","name":"q","schema":{"type":"string"},"description":"> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ","index$":2}]},"GET /api/v2/move-ailment/{id}/":{"protocol":"http","parameters":[{"in":"path","name":"id","schema":{"type":"string"},"description":"This parameter can be a string or an integer.","required":true,"index$":0}]},"GET /api/v2/move-category/{id}/":{"protocol":"http","parameters":[{"in":"path","name":"id","schema":{"type":"string"},"description":"This parameter can be a string or an integer.","required":true,"index$":0}]},"GET /api/v2/move/{id}/":{"protocol":"http","parameters":[{"in":"path","name":"id","schema":{"type":"string"},"description":"This parameter can be a string or an integer.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let move_ref01_data = Object.values(setup.data.existing.move)[0] as any

    // LIST
    const move_ref01_ent = client.Move()
    const move_ref01_match: any = {}

    const move_ref01_list = (await move_ref01_ent.list(move_ref01_match)).map((e: any) => e.data())


    // LOAD
    const move_ref01_match_dt0: any = {}
    move_ref01_match_dt0.id = move_ref01_data.id
    const move_ref01_data_dt0 = (await move_ref01_ent.load(move_ref01_match_dt0)).data()
    assert(move_ref01_data_dt0.id === move_ref01_data.id)


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
      '../../../../.sdk/test/entity/move/MoveTestData.json')

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
    ['move01','move02','move03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'POKEAPI_SDK_TEST_MOVE_ENTID': idmap,
    'POKEAPI_SDK_TEST_LIVE': 'FALSE',
    'POKEAPI_SDK_TEST_EXPLAIN': 'FALSE',
    'POKEAPI_SDK_APIKEY': '',
  })

  idmap = env['POKEAPI_SDK_TEST_MOVE_ENTID']

  const live = 'TRUE' === env.POKEAPI_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['POKEAPI_SDK_TEST_MOVE_ENTID']
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
  
