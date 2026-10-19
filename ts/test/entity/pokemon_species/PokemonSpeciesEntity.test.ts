

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


describe('PokemonSpeciesEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when POKEAPI_SDK_TEST_LIVE=TRUE.
  afterEach(liveDelay('POKEAPI_SDK_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = PokeapiSdkSDK.test()
    const ent = testsdk.PokemonSpecies()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('pokemon_species hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of PokeapiSdkSDK.test(offline).PokemonSpecies().stream('list')) { }
    }, /offline/)

    for await (const _item of PokeapiSdkSDK.test(offline).PokemonSpecies()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = PokeapiSdkSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.PokemonSpecies().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of PokeapiSdkSDK.test().PokemonSpecies().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new PokeapiSdkSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.PokemonSpecies().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.PokemonSpecies().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = PokeapiSdkSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.PokemonSpecies().list({"limit":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.POKEAPI_SDK_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'pokemon_species.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"base_happiness":{"a":true,"h":"Base Happiness","n":"base_happiness","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"base_happiness","index$":0},"capture_rate":{"a":true,"h":"Capture Rate","n":"capture_rate","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"capture_rate","index$":1},"color":{"a":true,"h":"Color","n":"color","r":true,"t":"`$OBJECT`","key$":"color","index$":2},"egg_groups":{"a":true,"h":"Egg Groups","n":"egg_groups","r":true,"ro":true,"t":"`$ARRAY`","key$":"egg_groups","index$":3},"evolution_chain":{"a":true,"h":"Evolution Chain","n":"evolution_chain","r":true,"t":"`$OBJECT`","key$":"evolution_chain","index$":4},"evolves_from_species":{"a":true,"h":"Evolves From Species","n":"evolves_from_species","r":true,"t":"`$OBJECT`","key$":"evolves_from_species","index$":5},"flavor_text_entries":{"a":true,"h":"Flavor Text Entries","n":"flavor_text_entries","r":true,"ro":true,"t":"`$ARRAY`","key$":"flavor_text_entries","index$":6},"form_descriptions":{"a":true,"h":"Form Descriptions","n":"form_descriptions","r":true,"ro":true,"t":"`$ARRAY`","key$":"form_descriptions","index$":7},"forms_switchable":{"a":true,"h":"Forms Switchable","n":"forms_switchable","r":false,"t":"`$BOOLEAN`","key$":"forms_switchable","index$":8},"gender_rate":{"a":true,"h":"Gender Rate","n":"gender_rate","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"gender_rate","index$":9},"genera":{"a":true,"h":"Genera","n":"genera","r":true,"ro":true,"t":"`$ARRAY`","key$":"genera","index$":10},"generation":{"a":true,"h":"Generation","n":"generation","r":true,"t":"`$OBJECT`","key$":"generation","index$":11},"growth_rate":{"a":true,"h":"Growth Rate","n":"growth_rate","r":true,"t":"`$OBJECT`","key$":"growth_rate","index$":12},"habitat":{"a":true,"h":"Habitat","n":"habitat","r":true,"t":"`$OBJECT`","key$":"habitat","index$":13},"has_gender_differences":{"a":true,"h":"Has Gender Differences","n":"has_gender_differences","r":false,"t":"`$BOOLEAN`","key$":"has_gender_differences","index$":14},"hatch_counter":{"a":true,"h":"Hatch Counter","n":"hatch_counter","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"hatch_counter","index$":15},"id":{"a":true,"h":"Id","n":"id","r":true,"ro":true,"t":"`$INTEGER`","key$":"id","index$":16},"is_baby":{"a":true,"h":"Is Baby","n":"is_baby","r":false,"t":"`$BOOLEAN`","key$":"is_baby","index$":17},"is_legendary":{"a":true,"h":"Is Legendary","n":"is_legendary","r":false,"t":"`$BOOLEAN`","key$":"is_legendary","index$":18},"is_mythical":{"a":true,"h":"Is Mythical","n":"is_mythical","r":false,"t":"`$BOOLEAN`","key$":"is_mythical","index$":19},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":20},"names":{"a":true,"h":"Names","n":"names","r":true,"ro":true,"t":"`$ARRAY`","key$":"names","index$":21},"order":{"a":true,"h":"Order","n":"order","r":false,"t":["`$ONE`",["`$INTEGER`","`$NULL`"]],"key$":"order","index$":22},"pal_park_encounters":{"a":true,"h":"Pal Park Encounters","n":"pal_park_encounters","r":true,"ro":true,"t":"`$ARRAY`","key$":"pal_park_encounters","index$":23},"pokedex_numbers":{"a":true,"h":"Pokedex Numbers","n":"pokedex_numbers","r":true,"ro":true,"t":"`$ARRAY`","key$":"pokedex_numbers","index$":24},"shape":{"a":true,"h":"Shape","n":"shape","r":true,"t":"`$OBJECT`","key$":"shape","index$":25},"url":{"a":true,"fo":"uri","h":"Url","n":"url","r":true,"ro":true,"t":"`$STRING`","key$":"url","index$":26},"varieties":{"a":true,"h":"Varieties","n":"varieties","r":true,"ro":true,"t":"`$ARRAY`","key$":"varieties","index$":27}},"id":{"field":"id","name":"id"},"name":"pokemon_species","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v2/pokemon-species/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"offset","or":"offset","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"q","or":"q","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v2/pokemon-species/","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v2"},{"lit":"pokemon-species"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v2/pokemon-species/{id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v2/pokemon-species/{id}/","q":{"exist":["id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"v2"},{"lit":"pokemon-species"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"pokemon_species","name__orig":"pokemon_species","Name":"PokemonSpecies","name_":"pokemon_species","name-":"pokemon-species","NAME":"POKEMON_SPECIES","index$":42}, {"active":true,"entity":"pokemon_species","key$":"BasicPokemonSpeciesFlow","kind":"basic","name":"BasicPokemonSpeciesFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"pokemon_species_ref01"}}]},{"a":true,"d":{},"i":{"ref":"pokemon_species_ref01","srcdatavar":"pokemon_species_ref01_data","suffix":"_dt0"},"m":{"id":"pokemon_species01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pokemon_species_ref01"}}]}]}, 'PokemonSpecies', {"GET /api/v2/pokemon-species/":{"protocol":"http","parameters":[{"name":"limit","required":false,"in":"query","description":"Number of results to return per page.","schema":{"type":"integer"},"index$":0},{"name":"offset","required":false,"in":"query","description":"The initial index from which to return the results.","schema":{"type":"integer"},"index$":1},{"in":"query","name":"q","schema":{"type":"string"},"description":"> Only available locally and not at [pokeapi.co](https://pokeapi.co/docs/v2)\nCase-insensitive query applied on the `name` property. ","index$":2}]},"GET /api/v2/pokemon-species/{id}/":{"protocol":"http","parameters":[{"in":"path","name":"id","schema":{"type":"string"},"description":"This parameter can be a string or an integer.","required":true,"index$":0}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let pokemon_species_ref01_data = Object.values(setup.data.existing.pokemon_species)[0] as any

    // LIST
    const pokemon_species_ref01_ent = client.PokemonSpecies()
    const pokemon_species_ref01_match: any = {}

    const pokemon_species_ref01_list = (await pokemon_species_ref01_ent.list(pokemon_species_ref01_match)).map((e: any) => e.data())


    // LOAD
    const pokemon_species_ref01_match_dt0: any = {}
    pokemon_species_ref01_match_dt0.id = pokemon_species_ref01_data.id
    const pokemon_species_ref01_data_dt0 = (await pokemon_species_ref01_ent.load(pokemon_species_ref01_match_dt0)).data()
    assert(pokemon_species_ref01_data_dt0.id === pokemon_species_ref01_data.id)


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
      '../../../../.sdk/test/entity/pokemon_species/PokemonSpeciesTestData.json')

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
    ['pokemon_species01','pokemon_species02','pokemon_species03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'POKEAPI_SDK_TEST_POKEMON_SPECIES_ENTID': idmap,
    'POKEAPI_SDK_TEST_LIVE': 'FALSE',
    'POKEAPI_SDK_TEST_EXPLAIN': 'FALSE',
    'POKEAPI_SDK_APIKEY': '',
  })

  idmap = env['POKEAPI_SDK_TEST_POKEMON_SPECIES_ENTID']

  const live = 'TRUE' === env.POKEAPI_SDK_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['POKEAPI_SDK_TEST_POKEMON_SPECIES_ENTID']
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
  
