# PokeapiSdk TypeScript SDK Reference

Complete API reference for the PokeapiSdk TypeScript SDK.


## PokeapiSdkSDK

### Constructor

```ts
new PokeapiSdkSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `PokeapiSdkSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = PokeapiSdkSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `PokeapiSdkSDK` instance in test mode.


### Instance Methods

#### `Ability(data?: object)`

Create a new `Ability` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AbilityEntity` instance.

#### `Berry(data?: object)`

Create a new `Berry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BerryEntity` instance.

#### `BerryFirmness(data?: object)`

Create a new `BerryFirmness` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BerryFirmnessEntity` instance.

#### `BerryFlavor(data?: object)`

Create a new `BerryFlavor` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BerryFlavorEntity` instance.

#### `Characteristic(data?: object)`

Create a new `Characteristic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CharacteristicEntity` instance.

#### `ContestEffect(data?: object)`

Create a new `ContestEffect` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContestEffectEntity` instance.

#### `ContestType(data?: object)`

Create a new `ContestType` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContestTypeEntity` instance.

#### `Currency(data?: object)`

Create a new `Currency` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CurrencyEntity` instance.

#### `EggGroup(data?: object)`

Create a new `EggGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EggGroupEntity` instance.

#### `EncounterCondition(data?: object)`

Create a new `EncounterCondition` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EncounterConditionEntity` instance.

#### `EncounterConditionValue(data?: object)`

Create a new `EncounterConditionValue` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EncounterConditionValueEntity` instance.

#### `EncounterMethod(data?: object)`

Create a new `EncounterMethod` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EncounterMethodEntity` instance.

#### `EvolutionChain(data?: object)`

Create a new `EvolutionChain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EvolutionChainEntity` instance.

#### `EvolutionTrigger(data?: object)`

Create a new `EvolutionTrigger` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EvolutionTriggerEntity` instance.

#### `EvolutionVariable(data?: object)`

Create a new `EvolutionVariable` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EvolutionVariableEntity` instance.

#### `Gender(data?: object)`

Create a new `Gender` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenderEntity` instance.

#### `Generation(data?: object)`

Create a new `Generation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerationEntity` instance.

#### `GrowthRate(data?: object)`

Create a new `GrowthRate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GrowthRateEntity` instance.

#### `Item(data?: object)`

Create a new `Item` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ItemEntity` instance.

#### `ItemAttribute(data?: object)`

Create a new `ItemAttribute` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ItemAttributeEntity` instance.

#### `ItemCategory(data?: object)`

Create a new `ItemCategory` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ItemCategoryEntity` instance.

#### `ItemFlingEffect(data?: object)`

Create a new `ItemFlingEffect` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ItemFlingEffectEntity` instance.

#### `ItemPocket(data?: object)`

Create a new `ItemPocket` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ItemPocketEntity` instance.

#### `Language(data?: object)`

Create a new `Language` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LanguageEntity` instance.

#### `Location(data?: object)`

Create a new `Location` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LocationEntity` instance.

#### `LocationArea(data?: object)`

Create a new `LocationArea` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LocationAreaEntity` instance.

#### `Machine(data?: object)`

Create a new `Machine` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MachineEntity` instance.

#### `Move(data?: object)`

Create a new `Move` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MoveEntity` instance.

#### `MoveBattleStyle(data?: object)`

Create a new `MoveBattleStyle` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MoveBattleStyleEntity` instance.

#### `MoveDamageClass(data?: object)`

Create a new `MoveDamageClass` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MoveDamageClassEntity` instance.

#### `MoveLearnMethod(data?: object)`

Create a new `MoveLearnMethod` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MoveLearnMethodEntity` instance.

#### `MoveTarget(data?: object)`

Create a new `MoveTarget` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MoveTargetEntity` instance.

#### `Nature(data?: object)`

Create a new `Nature` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NatureEntity` instance.

#### `PalParkArea(data?: object)`

Create a new `PalParkArea` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PalParkAreaEntity` instance.

#### `PokeathlonStat(data?: object)`

Create a new `PokeathlonStat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PokeathlonStatEntity` instance.

#### `Pokedex(data?: object)`

Create a new `Pokedex` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PokedexEntity` instance.

#### `Pokemon(data?: object)`

Create a new `Pokemon` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PokemonEntity` instance.

#### `PokemonColor(data?: object)`

Create a new `PokemonColor` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PokemonColorEntity` instance.

#### `PokemonEncounter(data?: object)`

Create a new `PokemonEncounter` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PokemonEncounterEntity` instance.

#### `PokemonForm(data?: object)`

Create a new `PokemonForm` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PokemonFormEntity` instance.

#### `PokemonHabitat(data?: object)`

Create a new `PokemonHabitat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PokemonHabitatEntity` instance.

#### `PokemonShape(data?: object)`

Create a new `PokemonShape` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PokemonShapeEntity` instance.

#### `PokemonSpecies(data?: object)`

Create a new `PokemonSpecies` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PokemonSpeciesEntity` instance.

#### `Region(data?: object)`

Create a new `Region` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RegionEntity` instance.

#### `Stat(data?: object)`

Create a new `Stat` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StatEntity` instance.

#### `SuperContestEffect(data?: object)`

Create a new `SuperContestEffect` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SuperContestEffectEntity` instance.

#### `Type(data?: object)`

Create a new `Type` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TypeEntity` instance.

#### `Utility(data?: object)`

Create a new `Utility` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UtilityEntity` instance.

#### `Version(data?: object)`

Create a new `Version` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VersionEntity` instance.

#### `VersionGroup(data?: object)`

Create a new `VersionGroup` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `VersionGroupEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |
| `fetchargs.ctrl.signal` | `AbortSignal` | Aborts the request in flight: `ok` is then `false` and `err.code` is `request_aborted`. |

**Returns:** `Promise<{ ok, status, headers, data }>`. On a failure
`ok` is `false` and `err` holds the error.

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `PokeapiSdkSDK.test()`.

**Returns:** `PokeapiSdkSDK` instance in test mode.

#### Cancelling a call

Every entity operation takes an optional `ctrl` object after its match or
data, and an `AbortSignal` in `ctrl.signal` cancels the request in flight.
The operation then rejects with an error whose `code` is
`request_aborted` and whose `cause` is the signal's reason. A request
whose signal has already aborted is not sent. `stream()` takes the signal
as `callopts.signal`, and ends when it aborts.


---

## AbilityEntity

```ts
const ability = client.Ability()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `effect_changes` | `any[]` | Yes |  |
| `effect_entries` | `any[]` | Yes |  |
| `flavor_text_entries` | `any[]` | Yes |  |
| `generation` | `Record<string, any>` | Yes |  |
| `id` | `number` | Yes |  |
| `is_main_series` | `boolean` | No |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `pokemon` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Ability().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Ability().load({ id: 'ability_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AbilityEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BerryEntity

```ts
const berry = client.Berry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `firmness` | `Record<string, any>` | Yes |  |
| `flavors` | `any[]` | Yes |  |
| `growth_time` | `number | null` | No |  |
| `id` | `number` | Yes |  |
| `item` | `Record<string, any>` | Yes |  |
| `max_harvest` | `number | null` | No |  |
| `name` | `string` | Yes |  |
| `natural_gift_power` | `number | null` | No |  |
| `natural_gift_type` | `Record<string, any>` | Yes |  |
| `size` | `number | null` | No |  |
| `smoothness` | `number | null` | No |  |
| `soil_dryness` | `number | null` | No |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Berry().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Berry().load({ id: 'berry_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BerryEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BerryFirmnessEntity

```ts
const berry_firmness = client.BerryFirmness()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `berries` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.BerryFirmness().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.BerryFirmness().load({ id: 'berry_firmness_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BerryFirmnessEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BerryFlavorEntity

```ts
const berry_flavor = client.BerryFlavor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `berries` | `any[]` | Yes |  |
| `contest_type` | `Record<string, any>` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.BerryFlavor().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.BerryFlavor().load({ id: 'berry_flavor_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BerryFlavorEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CharacteristicEntity

```ts
const characteristic = client.Characteristic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `descriptions` | `any[]` | Yes |  |
| `gene_modulo` | `number` | Yes |  |
| `highest_stat` | `Record<string, any>` | Yes |  |
| `id` | `number` | Yes |  |
| `possible_values` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Characteristic().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Characteristic().load({ id: 'characteristic_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CharacteristicEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContestEffectEntity

```ts
const contest_effect = client.ContestEffect()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appeal` | `number` | Yes |  |
| `effect_entries` | `any[]` | Yes |  |
| `flavor_text_entries` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `jam` | `number` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ContestEffect().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ContestEffect().load({ id: 'contest_effect_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContestEffectEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContestTypeEntity

```ts
const contest_type = client.ContestType()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `berry_flavor` | `any` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ContestType().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ContestType().load({ id: 'contest_type_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContestTypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CurrencyEntity

```ts
const currency = client.Currency()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Currency().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Currency().load({ id: 'currency_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CurrencyEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EggGroupEntity

```ts
const egg_group = client.EggGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `pokemon_species` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EggGroup().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EggGroup().load({ id: 'egg_group_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EggGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EncounterConditionEntity

```ts
const encounter_condition = client.EncounterCondition()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |
| `values` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EncounterCondition().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EncounterCondition().load({ id: 'encounter_condition_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EncounterConditionEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EncounterConditionValueEntity

```ts
const encounter_condition_value = client.EncounterConditionValue()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `condition` | `Record<string, any>` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EncounterConditionValue().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EncounterConditionValue().load({ id: 'encounter_condition_value_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EncounterConditionValueEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EncounterMethodEntity

```ts
const encounter_method = client.EncounterMethod()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `order` | `number | null` | No |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EncounterMethod().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EncounterMethod().load({ id: 'encounter_method_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EncounterMethodEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EvolutionChainEntity

```ts
const evolution_chain = client.EvolutionChain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `baby_trigger_item` | `Record<string, any>` | Yes |  |
| `chain` | `any` | Yes |  |
| `id` | `number` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EvolutionChain().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EvolutionChain().load({ id: 'evolution_chain_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EvolutionChainEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EvolutionTriggerEntity

```ts
const evolution_trigger = client.EvolutionTrigger()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `pokemon_species` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EvolutionTrigger().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EvolutionTrigger().load({ id: 'evolution_trigger_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EvolutionTriggerEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EvolutionVariableEntity

```ts
const evolution_variable = client.EvolutionVariable()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data_type` | `string` | No |  |
| `descriptions` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `source` | `string` | No | Where the value comes from: 'pokemon' for data stored on the Pokemon (e.g. |
| `symbol` | `string` | Yes |  |
| `url` | `string` | Yes |  |
| `version_group` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EvolutionVariable().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EvolutionVariable().load({ id: 'evolution_variable_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EvolutionVariableEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenderEntity

```ts
const gender = client.Gender()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `pokemon_species_details` | `any[]` | Yes |  |
| `required_for_evolution` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Gender().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Gender().load({ id: 'gender_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenderEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerationEntity

```ts
const generation = client.Generation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abilities` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `main_region` | `Record<string, any>` | Yes |  |
| `moves` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `pokemon_species` | `any[]` | Yes |  |
| `types` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |
| `version_groups` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Generation().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Generation().load({ id: 'generation_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerationEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GrowthRateEntity

```ts
const growth_rate = client.GrowthRate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `descriptions` | `any[]` | Yes |  |
| `formula` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `levels` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `pokemon_species` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.GrowthRate().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.GrowthRate().load({ id: 'growth_rate_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GrowthRateEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ItemEntity

```ts
const item = client.Item()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attributes` | `any[]` | Yes |  |
| `baby_trigger_for` | `any` | Yes |  |
| `category` | `Record<string, any>` | Yes |  |
| `effect_entries` | `any[]` | Yes |  |
| `flavor_text_entries` | `any[]` | Yes |  |
| `fling_effect` | `Record<string, any>` | Yes |  |
| `fling_power` | `number | null` | No |  |
| `game_indices` | `any[]` | Yes |  |
| `held_by_pokemon` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `machines` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `prices` | `any[]` | Yes |  |
| `sprites` | `any` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Item().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Item().load({ id: 'item_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ItemAttributeEntity

```ts
const item_attribute = client.ItemAttribute()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `descriptions` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `items` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ItemAttribute().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ItemAttribute().load({ id: 'item_attribute_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ItemAttributeEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ItemCategoryEntity

```ts
const item_category = client.ItemCategory()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `items` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `pocket` | `Record<string, any>` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ItemCategory().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ItemCategory().load({ id: 'item_category_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ItemCategoryEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ItemFlingEffectEntity

```ts
const item_fling_effect = client.ItemFlingEffect()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `effect_entries` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `items` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ItemFlingEffect().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ItemFlingEffect().load({ id: 'item_fling_effect_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ItemFlingEffectEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ItemPocketEntity

```ts
const item_pocket = client.ItemPocket()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `categories` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ItemPocket().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ItemPocket().load({ id: 'item_pocket_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ItemPocketEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LanguageEntity

```ts
const language = client.Language()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `iso3166` | `string` | Yes |  |
| `iso639` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `official` | `boolean` | No |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Language().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Language().load({ id: 'language_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LanguageEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LocationEntity

```ts
const location = client.Location()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `areas` | `any[]` | Yes |  |
| `game_indices` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `region` | `any` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Location().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Location().load({ id: 'location_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LocationEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LocationAreaEntity

```ts
const location_area = client.LocationArea()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `encounter_method_rates` | `any[]` | Yes |  |
| `game_index` | `number` | Yes |  |
| `id` | `number` | Yes |  |
| `location` | `Record<string, any>` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `pokemon_encounters` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.LocationArea().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.LocationArea().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LocationAreaEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MachineEntity

```ts
const machine = client.Machine()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `item` | `Record<string, any>` | Yes |  |
| `move` | `Record<string, any>` | Yes |  |
| `url` | `string` | Yes |  |
| `version_group` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Machine().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Machine().load({ id: 'machine_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MachineEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MoveEntity

```ts
const move = client.Move()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `accuracy` | `number | null` | No |  |
| `contest_combos` | `any` | Yes |  |
| `contest_effect` | `Record<string, any>` | Yes |  |
| `contest_type` | `Record<string, any>` | Yes |  |
| `damage_class` | `Record<string, any>` | Yes |  |
| `descriptions` | `any[]` | Yes |  |
| `effect_chance` | `number` | Yes |  |
| `effect_changes` | `any[]` | Yes |  |
| `effect_entries` | `any[]` | Yes |  |
| `flavor_text_entries` | `any[]` | Yes |  |
| `generation` | `Record<string, any>` | Yes |  |
| `id` | `number` | Yes |  |
| `learned_by_pokemon` | `any[]` | Yes |  |
| `machines` | `any[]` | Yes |  |
| `meta` | `any` | Yes |  |
| `moves` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `past_values` | `any[]` | Yes |  |
| `power` | `number | null` | No |  |
| `pp` | `number | null` | No |  |
| `priority` | `number | null` | No |  |
| `stat_changes` | `any[]` | Yes |  |
| `super_contest_effect` | `Record<string, any>` | Yes |  |
| `target` | `Record<string, any>` | Yes |  |
| `type` | `Record<string, any>` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Move().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Move().load({ id: 'move_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MoveEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MoveBattleStyleEntity

```ts
const move_battle_style = client.MoveBattleStyle()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MoveBattleStyle().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.MoveBattleStyle().load({ id: 'move_battle_style_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MoveBattleStyleEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MoveDamageClassEntity

```ts
const move_damage_class = client.MoveDamageClass()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `descriptions` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `moves` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MoveDamageClass().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.MoveDamageClass().load({ id: 'move_damage_class_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MoveDamageClassEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MoveLearnMethodEntity

```ts
const move_learn_method = client.MoveLearnMethod()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `descriptions` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |
| `version_groups` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MoveLearnMethod().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.MoveLearnMethod().load({ id: 'move_learn_method_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MoveLearnMethodEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MoveTargetEntity

```ts
const move_target = client.MoveTarget()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `descriptions` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `moves` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.MoveTarget().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.MoveTarget().load({ id: 'move_target_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MoveTargetEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NatureEntity

```ts
const nature = client.Nature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `berries` | `any[]` | Yes |  |
| `decreased_stat` | `Record<string, any>` | Yes |  |
| `hates_flavor` | `Record<string, any>` | Yes |  |
| `id` | `number` | Yes |  |
| `increased_stat` | `Record<string, any>` | Yes |  |
| `likes_flavor` | `Record<string, any>` | Yes |  |
| `move_battle_style_preferences` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `pokeathlon_stat_changes` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Nature().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Nature().load({ id: 'nature_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NatureEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PalParkAreaEntity

```ts
const pal_park_area = client.PalParkArea()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `pokemon_encounters` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PalParkArea().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PalParkArea().load({ id: 'pal_park_area_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PalParkAreaEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PokeathlonStatEntity

```ts
const pokeathlon_stat = client.PokeathlonStat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affecting_natures` | `any` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PokeathlonStat().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PokeathlonStat().load({ id: 'pokeathlon_stat_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PokeathlonStatEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PokedexEntity

```ts
const pokedex = client.Pokedex()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `descriptions` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `is_main_series` | `boolean` | No |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `pokemon_entries` | `any[]` | Yes |  |
| `region` | `Record<string, any>` | Yes |  |
| `url` | `string` | Yes |  |
| `version_groups` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Pokedex().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Pokedex().load({ id: 'pokedex_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PokedexEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PokemonEntity

```ts
const pokemon = client.Pokemon()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `abilities` | `any[]` | Yes |  |
| `base_experience` | `number | null` | No |  |
| `cries` | `any` | Yes |  |
| `forms` | `any[]` | Yes |  |
| `game_indices` | `any[]` | Yes |  |
| `height` | `number | null` | No |  |
| `held_items` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `is_default` | `boolean` | No |  |
| `location_area_encounters` | `string` | Yes |  |
| `moves` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `order` | `number | null` | No |  |
| `past_abilities` | `any[]` | Yes |  |
| `past_stats` | `any[]` | Yes |  |
| `past_types` | `any[]` | Yes |  |
| `species` | `Record<string, any>` | Yes |  |
| `sprites` | `any` | Yes |  |
| `stats` | `any[]` | Yes |  |
| `types` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |
| `weight` | `number | null` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Pokemon().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Pokemon().load({ id: 'pokemon_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PokemonEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PokemonColorEntity

```ts
const pokemon_color = client.PokemonColor()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `pokemon_species` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PokemonColor().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PokemonColor().load({ id: 'pokemon_color_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PokemonColorEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PokemonEncounterEntity

```ts
const pokemon_encounter = client.PokemonEncounter()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `location_area` | `Record<string, any>` | Yes |  |
| `version_details` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PokemonEncounter().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PokemonEncounterEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PokemonFormEntity

```ts
const pokemon_form = client.PokemonForm()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `flavor_text_entries` | `any[]` | Yes |  |
| `form_name` | `string` | Yes |  |
| `form_names` | `any[]` | Yes |  |
| `form_order` | `number | null` | No |  |
| `id` | `number` | Yes |  |
| `is_battle_only` | `boolean` | No |  |
| `is_default` | `boolean` | No |  |
| `is_mega` | `boolean` | No |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `order` | `number | null` | No |  |
| `pokemon` | `Record<string, any>` | Yes |  |
| `sprites` | `any` | Yes |  |
| `trigger_conditions` | `any[]` | Yes |  |
| `types` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |
| `version_group` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PokemonForm().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PokemonForm().load({ id: 'pokemon_form_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PokemonFormEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PokemonHabitatEntity

```ts
const pokemon_habitat = client.PokemonHabitat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `pokemon_species` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PokemonHabitat().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PokemonHabitat().load({ id: 'pokemon_habitat_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PokemonHabitatEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PokemonShapeEntity

```ts
const pokemon_shape = client.PokemonShape()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `awesome_names` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `pokemon_species` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PokemonShape().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PokemonShape().load({ id: 'pokemon_shape_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PokemonShapeEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PokemonSpeciesEntity

```ts
const pokemon_species = client.PokemonSpecies()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_happiness` | `number | null` | No |  |
| `capture_rate` | `number | null` | No |  |
| `color` | `Record<string, any>` | Yes |  |
| `egg_groups` | `any[]` | Yes |  |
| `evolution_chain` | `Record<string, any>` | Yes |  |
| `evolves_from_species` | `Record<string, any>` | Yes |  |
| `flavor_text_entries` | `any[]` | Yes |  |
| `form_descriptions` | `any[]` | Yes |  |
| `forms_switchable` | `boolean` | No |  |
| `gender_rate` | `number | null` | No |  |
| `genera` | `any[]` | Yes |  |
| `generation` | `Record<string, any>` | Yes |  |
| `growth_rate` | `Record<string, any>` | Yes |  |
| `habitat` | `Record<string, any>` | Yes |  |
| `has_gender_differences` | `boolean` | No |  |
| `hatch_counter` | `number | null` | No |  |
| `id` | `number` | Yes |  |
| `is_baby` | `boolean` | No |  |
| `is_legendary` | `boolean` | No |  |
| `is_mythical` | `boolean` | No |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `order` | `number | null` | No |  |
| `pal_park_encounters` | `any[]` | Yes |  |
| `pokedex_numbers` | `any[]` | Yes |  |
| `shape` | `Record<string, any>` | Yes |  |
| `url` | `string` | Yes |  |
| `varieties` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PokemonSpecies().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PokemonSpecies().load({ id: 'pokemon_species_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PokemonSpeciesEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RegionEntity

```ts
const region = client.Region()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `locations` | `any[]` | Yes |  |
| `main_generation` | `any` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `pokedexes` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |
| `version_groups` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Region().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Region().load({ id: 'region_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RegionEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StatEntity

```ts
const stat = client.Stat()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `affecting_items` | `any[]` | Yes |  |
| `affecting_moves` | `any` | Yes |  |
| `affecting_natures` | `any` | Yes |  |
| `characteristics` | `any[]` | Yes |  |
| `game_index` | `number` | Yes |  |
| `id` | `number` | Yes |  |
| `is_battle_only` | `boolean` | No |  |
| `move_damage_class` | `Record<string, any>` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Stat().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Stat().load({ id: 'stat_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StatEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SuperContestEffectEntity

```ts
const super_contest_effect = client.SuperContestEffect()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `appeal` | `number` | Yes |  |
| `flavor_text_entries` | `any[]` | Yes |  |
| `id` | `number` | Yes |  |
| `moves` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.SuperContestEffect().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.SuperContestEffect().load({ id: 'super_contest_effect_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SuperContestEffectEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TypeEntity

```ts
const type = client.Type()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `damage_relations` | `any` | Yes |  |
| `game_indices` | `any[]` | Yes |  |
| `generation` | `Record<string, any>` | Yes |  |
| `id` | `number` | Yes |  |
| `move_damage_class` | `Record<string, any>` | Yes |  |
| `moves` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `past_damage_relations` | `any[]` | Yes |  |
| `pokemon` | `any[]` | Yes |  |
| `sprites` | `any` | Yes |  |
| `url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Type().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Type().load({ id: 'type_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TypeEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UtilityEntity

```ts
const utility = client.Utility()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deploy_date` | `string | null` | Yes |  |
| `hash` | `string | null` | Yes |  |
| `tag` | `string | null` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Utility().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UtilityEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VersionEntity

```ts
const version = client.Version()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | Yes |  |
| `name` | `string` | Yes |  |
| `names` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |
| `version_group` | `Record<string, any>` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Version().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Version().load({ id: 'version_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VersionEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## VersionGroupEntity

```ts
const version_group = client.VersionGroup()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `generation` | `Record<string, any>` | Yes |  |
| `id` | `number` | Yes |  |
| `move_learn_methods` | `any[]` | Yes |  |
| `name` | `string` | Yes |  |
| `order` | `number | null` | No |  |
| `pokedexes` | `any[]` | Yes |  |
| `regions` | `any[]` | Yes |  |
| `url` | `string` | Yes |  |
| `versions` | `any[]` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.VersionGroup().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.VersionGroup().load({ id: 'version_group_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `VersionGroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `PokeapiSdkSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new PokeapiSdkSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

