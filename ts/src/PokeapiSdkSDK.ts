// PokeapiSdk Ts SDK

import { AbilityEntity } from './entity/AbilityEntity'
import { BerryEntity } from './entity/BerryEntity'
import { BerryFirmnessEntity } from './entity/BerryFirmnessEntity'
import { BerryFlavorEntity } from './entity/BerryFlavorEntity'
import { CharacteristicEntity } from './entity/CharacteristicEntity'
import { ContestEffectEntity } from './entity/ContestEffectEntity'
import { ContestTypeEntity } from './entity/ContestTypeEntity'
import { CurrencyEntity } from './entity/CurrencyEntity'
import { EggGroupEntity } from './entity/EggGroupEntity'
import { EncounterConditionEntity } from './entity/EncounterConditionEntity'
import { EncounterConditionValueEntity } from './entity/EncounterConditionValueEntity'
import { EncounterMethodEntity } from './entity/EncounterMethodEntity'
import { EvolutionChainEntity } from './entity/EvolutionChainEntity'
import { EvolutionTriggerEntity } from './entity/EvolutionTriggerEntity'
import { EvolutionVariableEntity } from './entity/EvolutionVariableEntity'
import { GenderEntity } from './entity/GenderEntity'
import { GenerationEntity } from './entity/GenerationEntity'
import { GrowthRateEntity } from './entity/GrowthRateEntity'
import { ItemEntity } from './entity/ItemEntity'
import { ItemAttributeEntity } from './entity/ItemAttributeEntity'
import { ItemCategoryEntity } from './entity/ItemCategoryEntity'
import { ItemFlingEffectEntity } from './entity/ItemFlingEffectEntity'
import { ItemPocketEntity } from './entity/ItemPocketEntity'
import { LanguageEntity } from './entity/LanguageEntity'
import { LocationEntity } from './entity/LocationEntity'
import { LocationAreaEntity } from './entity/LocationAreaEntity'
import { MachineEntity } from './entity/MachineEntity'
import { MoveEntity } from './entity/MoveEntity'
import { MoveBattleStyleEntity } from './entity/MoveBattleStyleEntity'
import { MoveDamageClassEntity } from './entity/MoveDamageClassEntity'
import { MoveLearnMethodEntity } from './entity/MoveLearnMethodEntity'
import { MoveTargetEntity } from './entity/MoveTargetEntity'
import { NatureEntity } from './entity/NatureEntity'
import { PalParkAreaEntity } from './entity/PalParkAreaEntity'
import { PokeathlonStatEntity } from './entity/PokeathlonStatEntity'
import { PokedexEntity } from './entity/PokedexEntity'
import { PokemonEntity } from './entity/PokemonEntity'
import { PokemonColorEntity } from './entity/PokemonColorEntity'
import { PokemonEncounterEntity } from './entity/PokemonEncounterEntity'
import { PokemonFormEntity } from './entity/PokemonFormEntity'
import { PokemonHabitatEntity } from './entity/PokemonHabitatEntity'
import { PokemonShapeEntity } from './entity/PokemonShapeEntity'
import { PokemonSpeciesEntity } from './entity/PokemonSpeciesEntity'
import { RegionEntity } from './entity/RegionEntity'
import { StatEntity } from './entity/StatEntity'
import { SuperContestEffectEntity } from './entity/SuperContestEffectEntity'
import { TypeEntity } from './entity/TypeEntity'
import { UtilityEntity } from './entity/UtilityEntity'
import { VersionEntity } from './entity/VersionEntity'
import { VersionGroupEntity } from './entity/VersionGroupEntity'

export type * from './PokeapiSdkTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { PokeapiSdkEntityBase } from './PokeapiSdkEntityBase'
import { Utility } from './utility/Utility'
import { unreadableBody } from './utility/ResultBodyUtility'
import { abortError } from './utility/MakeRequestUtility'
import { allowed } from './utility/PrepareMethodUtility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


// A request's outcome: ok is false alone on an error with no response, so a
// caller narrowing on it reaches the status and the data.
type DirectResult =
  | { ok: false, err: any, status?: undefined, headers?: undefined, data?: undefined }
  | { ok: boolean, status: number, headers: any, data: any, err?: any }


class PokeapiSdkSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    for (const key of ['_options', '_rootctx', '_features']) {
      Object.defineProperty(this, key, {
        value: (this as any)[key], enumerable: false, writable: true, configurable: true
      })
    }

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options
    const method = String(fetchargs.method || 'GET').toUpperCase()

    if (!allowed(options.allow.method, method)) {
      return ctx.error('spec_method_allow', 'Method "' + method +
        '" not allowed by SDK option allow.method value: "' + options.allow.method + '"')
    }

    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method,
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any): Promise<DirectResult> {
    if (!allowed(this._options.allow.op, 'direct')) {
      return {
        ok: false,
        err: new Error('PokeapiSdkSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any): Promise<DirectResult> {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return { ok: false, err: utility.clean(this._rootctx, fetchdef) }
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      if (true === fetchdef.signal?.aborted) {
        throw fetchdef.signal.reason
      }

      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: utility.clean(ctx, abortError(ctx, fetched)) }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      let err: any = undefined
      if (!noBody) {
        let text: any = undefined
        try {
          const raw: any = fetched
          if ('function' === typeof raw.text) {
            text = await raw.text()
            json = '' === text.trim() ? undefined : JSON.parse(text)
          }
          else {
            json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
          }
        }
        catch (parseErr: any) {
          if ('SyntaxError' !== parseErr?.name) {
            throw parseErr
          }
          err = unreadableBody(ctx, {
            status, headers, text: text ?? parseErr.text, sent: fetchdef.headers,
            failed: 200 <= status && status < 300 ? undefined :
              ctx.error('request_status', 'request: ' + status + ': ' + fetched.statusText),
          })
        }
      }

      return {
        ok: null == err && status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
        ...(null == err ? {} : { err: utility.clean(ctx, err) }),
      }
    }
    catch (err: any) {
      return { ok: false, err: utility.clean(ctx, abortError(ctx, err)) }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!allowed(options.allow.op, 'graphql')) {
      return {
        ok: false,
        err: new Error('PokeapiSdkSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('PokeapiSdkSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Ability().list()` / `client.Ability().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Ability(entopts?: Record<string, any>) {
    const self = this
    return new AbilityEntity(self, entopts)
  }


  // Entity access: `client.Berry().list()` / `client.Berry().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Berry(entopts?: Record<string, any>) {
    const self = this
    return new BerryEntity(self, entopts)
  }


  // Entity access: `client.BerryFirmness().list()` / `client.BerryFirmness().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BerryFirmness(entopts?: Record<string, any>) {
    const self = this
    return new BerryFirmnessEntity(self, entopts)
  }


  // Entity access: `client.BerryFlavor().list()` / `client.BerryFlavor().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BerryFlavor(entopts?: Record<string, any>) {
    const self = this
    return new BerryFlavorEntity(self, entopts)
  }


  // Entity access: `client.Characteristic().list()` / `client.Characteristic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Characteristic(entopts?: Record<string, any>) {
    const self = this
    return new CharacteristicEntity(self, entopts)
  }


  // Entity access: `client.ContestEffect().list()` / `client.ContestEffect().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContestEffect(entopts?: Record<string, any>) {
    const self = this
    return new ContestEffectEntity(self, entopts)
  }


  // Entity access: `client.ContestType().list()` / `client.ContestType().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContestType(entopts?: Record<string, any>) {
    const self = this
    return new ContestTypeEntity(self, entopts)
  }


  // Entity access: `client.Currency().list()` / `client.Currency().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Currency(entopts?: Record<string, any>) {
    const self = this
    return new CurrencyEntity(self, entopts)
  }


  // Entity access: `client.EggGroup().list()` / `client.EggGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EggGroup(entopts?: Record<string, any>) {
    const self = this
    return new EggGroupEntity(self, entopts)
  }


  // Entity access: `client.EncounterCondition().list()` / `client.EncounterCondition().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EncounterCondition(entopts?: Record<string, any>) {
    const self = this
    return new EncounterConditionEntity(self, entopts)
  }


  // Entity access: `client.EncounterConditionValue().list()` / `client.EncounterConditionValue().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EncounterConditionValue(entopts?: Record<string, any>) {
    const self = this
    return new EncounterConditionValueEntity(self, entopts)
  }


  // Entity access: `client.EncounterMethod().list()` / `client.EncounterMethod().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EncounterMethod(entopts?: Record<string, any>) {
    const self = this
    return new EncounterMethodEntity(self, entopts)
  }


  // Entity access: `client.EvolutionChain().list()` / `client.EvolutionChain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EvolutionChain(entopts?: Record<string, any>) {
    const self = this
    return new EvolutionChainEntity(self, entopts)
  }


  // Entity access: `client.EvolutionTrigger().list()` / `client.EvolutionTrigger().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EvolutionTrigger(entopts?: Record<string, any>) {
    const self = this
    return new EvolutionTriggerEntity(self, entopts)
  }


  // Entity access: `client.EvolutionVariable().list()` / `client.EvolutionVariable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EvolutionVariable(entopts?: Record<string, any>) {
    const self = this
    return new EvolutionVariableEntity(self, entopts)
  }


  // Entity access: `client.Gender().list()` / `client.Gender().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Gender(entopts?: Record<string, any>) {
    const self = this
    return new GenderEntity(self, entopts)
  }


  // Entity access: `client.Generation().list()` / `client.Generation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Generation(entopts?: Record<string, any>) {
    const self = this
    return new GenerationEntity(self, entopts)
  }


  // Entity access: `client.GrowthRate().list()` / `client.GrowthRate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GrowthRate(entopts?: Record<string, any>) {
    const self = this
    return new GrowthRateEntity(self, entopts)
  }


  // Entity access: `client.Item().list()` / `client.Item().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Item(entopts?: Record<string, any>) {
    const self = this
    return new ItemEntity(self, entopts)
  }


  // Entity access: `client.ItemAttribute().list()` / `client.ItemAttribute().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ItemAttribute(entopts?: Record<string, any>) {
    const self = this
    return new ItemAttributeEntity(self, entopts)
  }


  // Entity access: `client.ItemCategory().list()` / `client.ItemCategory().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ItemCategory(entopts?: Record<string, any>) {
    const self = this
    return new ItemCategoryEntity(self, entopts)
  }


  // Entity access: `client.ItemFlingEffect().list()` / `client.ItemFlingEffect().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ItemFlingEffect(entopts?: Record<string, any>) {
    const self = this
    return new ItemFlingEffectEntity(self, entopts)
  }


  // Entity access: `client.ItemPocket().list()` / `client.ItemPocket().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ItemPocket(entopts?: Record<string, any>) {
    const self = this
    return new ItemPocketEntity(self, entopts)
  }


  // Entity access: `client.Language().list()` / `client.Language().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Language(entopts?: Record<string, any>) {
    const self = this
    return new LanguageEntity(self, entopts)
  }


  // Entity access: `client.Location().list()` / `client.Location().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Location(entopts?: Record<string, any>) {
    const self = this
    return new LocationEntity(self, entopts)
  }


  // Entity access: `client.LocationArea().list()` / `client.LocationArea().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LocationArea(entopts?: Record<string, any>) {
    const self = this
    return new LocationAreaEntity(self, entopts)
  }


  // Entity access: `client.Machine().list()` / `client.Machine().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Machine(entopts?: Record<string, any>) {
    const self = this
    return new MachineEntity(self, entopts)
  }


  // Entity access: `client.Move().list()` / `client.Move().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Move(entopts?: Record<string, any>) {
    const self = this
    return new MoveEntity(self, entopts)
  }


  // Entity access: `client.MoveBattleStyle().list()` / `client.MoveBattleStyle().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MoveBattleStyle(entopts?: Record<string, any>) {
    const self = this
    return new MoveBattleStyleEntity(self, entopts)
  }


  // Entity access: `client.MoveDamageClass().list()` / `client.MoveDamageClass().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MoveDamageClass(entopts?: Record<string, any>) {
    const self = this
    return new MoveDamageClassEntity(self, entopts)
  }


  // Entity access: `client.MoveLearnMethod().list()` / `client.MoveLearnMethod().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MoveLearnMethod(entopts?: Record<string, any>) {
    const self = this
    return new MoveLearnMethodEntity(self, entopts)
  }


  // Entity access: `client.MoveTarget().list()` / `client.MoveTarget().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MoveTarget(entopts?: Record<string, any>) {
    const self = this
    return new MoveTargetEntity(self, entopts)
  }


  // Entity access: `client.Nature().list()` / `client.Nature().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Nature(entopts?: Record<string, any>) {
    const self = this
    return new NatureEntity(self, entopts)
  }


  // Entity access: `client.PalParkArea().list()` / `client.PalParkArea().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PalParkArea(entopts?: Record<string, any>) {
    const self = this
    return new PalParkAreaEntity(self, entopts)
  }


  // Entity access: `client.PokeathlonStat().list()` / `client.PokeathlonStat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PokeathlonStat(entopts?: Record<string, any>) {
    const self = this
    return new PokeathlonStatEntity(self, entopts)
  }


  // Entity access: `client.Pokedex().list()` / `client.Pokedex().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Pokedex(entopts?: Record<string, any>) {
    const self = this
    return new PokedexEntity(self, entopts)
  }


  // Entity access: `client.Pokemon().list()` / `client.Pokemon().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Pokemon(entopts?: Record<string, any>) {
    const self = this
    return new PokemonEntity(self, entopts)
  }


  // Entity access: `client.PokemonColor().list()` / `client.PokemonColor().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PokemonColor(entopts?: Record<string, any>) {
    const self = this
    return new PokemonColorEntity(self, entopts)
  }


  // Entity access: `client.PokemonEncounter().list()` / `client.PokemonEncounter().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PokemonEncounter(entopts?: Record<string, any>) {
    const self = this
    return new PokemonEncounterEntity(self, entopts)
  }


  // Entity access: `client.PokemonForm().list()` / `client.PokemonForm().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PokemonForm(entopts?: Record<string, any>) {
    const self = this
    return new PokemonFormEntity(self, entopts)
  }


  // Entity access: `client.PokemonHabitat().list()` / `client.PokemonHabitat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PokemonHabitat(entopts?: Record<string, any>) {
    const self = this
    return new PokemonHabitatEntity(self, entopts)
  }


  // Entity access: `client.PokemonShape().list()` / `client.PokemonShape().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PokemonShape(entopts?: Record<string, any>) {
    const self = this
    return new PokemonShapeEntity(self, entopts)
  }


  // Entity access: `client.PokemonSpecies().list()` / `client.PokemonSpecies().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PokemonSpecies(entopts?: Record<string, any>) {
    const self = this
    return new PokemonSpeciesEntity(self, entopts)
  }


  // Entity access: `client.Region().list()` / `client.Region().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Region(entopts?: Record<string, any>) {
    const self = this
    return new RegionEntity(self, entopts)
  }


  // Entity access: `client.Stat().list()` / `client.Stat().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Stat(entopts?: Record<string, any>) {
    const self = this
    return new StatEntity(self, entopts)
  }


  // Entity access: `client.SuperContestEffect().list()` / `client.SuperContestEffect().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SuperContestEffect(entopts?: Record<string, any>) {
    const self = this
    return new SuperContestEffectEntity(self, entopts)
  }


  // Entity access: `client.Type().list()` / `client.Type().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Type(entopts?: Record<string, any>) {
    const self = this
    return new TypeEntity(self, entopts)
  }


  // Entity access: `client.Utility().list()` / `client.Utility().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Utility(entopts?: Record<string, any>) {
    const self = this
    return new UtilityEntity(self, entopts)
  }


  // Entity access: `client.Version().list()` / `client.Version().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Version(entopts?: Record<string, any>) {
    const self = this
    return new VersionEntity(self, entopts)
  }


  // Entity access: `client.VersionGroup().list()` / `client.VersionGroup().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VersionGroup(entopts?: Record<string, any>) {
    const self = this
    return new VersionGroupEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new PokeapiSdkSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return PokeapiSdkSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'PokeapiSdk' }
  }

  toString() {
    return 'PokeapiSdk ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = PokeapiSdkSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  PokeapiSdkEntityBase,

  PokeapiSdkSDK,
  SDK,
}


export type { DirectResult }
