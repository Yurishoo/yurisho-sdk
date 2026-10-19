# PokeapiSdk TypeScript SDK



The TypeScript SDK for the PokeapiSdk API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Ability()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Tags](https://github.com/REPLACE-WITH-yurishoo-GITHUB-USERNAME/yurishoo-yaseen-pokeapi-sdk/tags)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/REPLACE-WITH-yurishoo-GITHUB-USERNAME/yurishoo-yaseen-pokeapi-sdk
npm install ./yurishoo-yaseen-pokeapi-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { PokeapiSdkSDK } from '@voxgig-sdk/pokeapi-sdk'

const client = new PokeapiSdkSDK({
  apikey: process.env.POKEAPI_SDK_APIKEY,
})
```

### 2. List ability records

`list()` resolves to an array of Ability ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const abilitys = await client.Ability().list()

for (const ability of abilitys) {
  console.log(ability.data())
}
```

### 3. Load an ability

`load()` returns the entity and throws on failure; `.data()` reads its record:

```ts
try {
  const ability = await client.Ability().load({ id: 'example_id' })
  console.log(ability.data())
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const berryflavors = await client.BerryFlavor().list()
  console.log(berryflavors.map((item) => item.data()))
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
result envelope. Branch on `ok`; on failure `status` holds the HTTP status
(for error responses) and `err` holds the error:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (!result.ok) {
  console.error('request failed:', result.status, result.err)
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = PokeapiSdkSDK.test()

const berryflavors = await client.BerryFlavor().list()
// berryflavors is an array of BerryFlavor entities, one per mock record
console.log(berryflavors.map((berryflavor) => berryflavor.data()))
```

You can also use the instance method:

```ts
const client = new PokeapiSdkSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.BerryFlavor()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new PokeapiSdkSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
POKEAPI_SDK_TEST_LIVE=TRUE
POKEAPI_SDK_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### PokeapiSdkSDK

#### Constructor

```ts
new PokeapiSdkSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Ability(data?)` | `AbilityEntity` | Create an Ability entity instance. |
| `Berry(data?)` | `BerryEntity` | Create a Berry entity instance. |
| `BerryFirmness(data?)` | `BerryFirmnessEntity` | Create a BerryFirmness entity instance. |
| `BerryFlavor(data?)` | `BerryFlavorEntity` | Create a BerryFlavor entity instance. |
| `Characteristic(data?)` | `CharacteristicEntity` | Create a Characteristic entity instance. |
| `ContestEffect(data?)` | `ContestEffectEntity` | Create a ContestEffect entity instance. |
| `ContestType(data?)` | `ContestTypeEntity` | Create a ContestType entity instance. |
| `Currency(data?)` | `CurrencyEntity` | Create a Currency entity instance. |
| `EggGroup(data?)` | `EggGroupEntity` | Create an EggGroup entity instance. |
| `EncounterCondition(data?)` | `EncounterConditionEntity` | Create an EncounterCondition entity instance. |
| `EncounterConditionValue(data?)` | `EncounterConditionValueEntity` | Create an EncounterConditionValue entity instance. |
| `EncounterMethod(data?)` | `EncounterMethodEntity` | Create an EncounterMethod entity instance. |
| `EvolutionChain(data?)` | `EvolutionChainEntity` | Create an EvolutionChain entity instance. |
| `EvolutionTrigger(data?)` | `EvolutionTriggerEntity` | Create an EvolutionTrigger entity instance. |
| `EvolutionVariable(data?)` | `EvolutionVariableEntity` | Create an EvolutionVariable entity instance. |
| `Gender(data?)` | `GenderEntity` | Create a Gender entity instance. |
| `Generation(data?)` | `GenerationEntity` | Create a Generation entity instance. |
| `GrowthRate(data?)` | `GrowthRateEntity` | Create a GrowthRate entity instance. |
| `Item(data?)` | `ItemEntity` | Create an Item entity instance. |
| `ItemAttribute(data?)` | `ItemAttributeEntity` | Create an ItemAttribute entity instance. |
| `ItemCategory(data?)` | `ItemCategoryEntity` | Create an ItemCategory entity instance. |
| `ItemFlingEffect(data?)` | `ItemFlingEffectEntity` | Create an ItemFlingEffect entity instance. |
| `ItemPocket(data?)` | `ItemPocketEntity` | Create an ItemPocket entity instance. |
| `Language(data?)` | `LanguageEntity` | Create a Language entity instance. |
| `Location(data?)` | `LocationEntity` | Create a Location entity instance. |
| `LocationArea(data?)` | `LocationAreaEntity` | Create a LocationArea entity instance. |
| `Machine(data?)` | `MachineEntity` | Create a Machine entity instance. |
| `Move(data?)` | `MoveEntity` | Create a Move entity instance. |
| `MoveBattleStyle(data?)` | `MoveBattleStyleEntity` | Create a MoveBattleStyle entity instance. |
| `MoveDamageClass(data?)` | `MoveDamageClassEntity` | Create a MoveDamageClass entity instance. |
| `MoveLearnMethod(data?)` | `MoveLearnMethodEntity` | Create a MoveLearnMethod entity instance. |
| `MoveTarget(data?)` | `MoveTargetEntity` | Create a MoveTarget entity instance. |
| `Nature(data?)` | `NatureEntity` | Create a Nature entity instance. |
| `PalParkArea(data?)` | `PalParkAreaEntity` | Create a PalParkArea entity instance. |
| `PokeathlonStat(data?)` | `PokeathlonStatEntity` | Create a PokeathlonStat entity instance. |
| `Pokedex(data?)` | `PokedexEntity` | Create a Pokedex entity instance. |
| `Pokemon(data?)` | `PokemonEntity` | Create a Pokemon entity instance. |
| `PokemonColor(data?)` | `PokemonColorEntity` | Create a PokemonColor entity instance. |
| `PokemonEncounter(data?)` | `PokemonEncounterEntity` | Create a PokemonEncounter entity instance. |
| `PokemonForm(data?)` | `PokemonFormEntity` | Create a PokemonForm entity instance. |
| `PokemonHabitat(data?)` | `PokemonHabitatEntity` | Create a PokemonHabitat entity instance. |
| `PokemonShape(data?)` | `PokemonShapeEntity` | Create a PokemonShape entity instance. |
| `PokemonSpecies(data?)` | `PokemonSpeciesEntity` | Create a PokemonSpecies entity instance. |
| `Region(data?)` | `RegionEntity` | Create a Region entity instance. |
| `Stat(data?)` | `StatEntity` | Create a Stat entity instance. |
| `SuperContestEffect(data?)` | `SuperContestEffectEntity` | Create a SuperContestEffect entity instance. |
| `Type(data?)` | `TypeEntity` | Create a Type entity instance. |
| `Utility(data?)` | `UtilityEntity` | Create an Utility entity instance. |
| `Version(data?)` | `VersionEntity` | Create a Version entity instance. |
| `VersionGroup(data?)` | `VersionGroupEntity` | Create a VersionGroup entity instance. |
| `tester(testopts?, sdkopts?)` | `PokeapiSdkSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `PokeapiSdkSDK.test(testopts?, sdkopts?)` | `PokeapiSdkSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria, and return it. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria, one per record. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): PokeapiSdkSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity itself — there is no result
envelope, and an entity's `data()` reads its record:

- `load` resolves to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Ability

| Field | Description |
| --- | --- |
| `effect_changes` |  |
| `effect_entries` |  |
| `flavor_text_entries` |  |
| `generation` |  |
| `id` |  |
| `is_main_series` |  |
| `name` |  |
| `names` |  |
| `pokemon` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/ability/`

#### Berry

| Field | Description |
| --- | --- |
| `firmness` |  |
| `flavors` |  |
| `growth_time` |  |
| `id` |  |
| `item` |  |
| `max_harvest` |  |
| `name` |  |
| `natural_gift_power` |  |
| `natural_gift_type` |  |
| `size` |  |
| `smoothness` |  |
| `soil_dryness` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/berry/`

#### BerryFirmness

| Field | Description |
| --- | --- |
| `berries` |  |
| `id` |  |
| `name` |  |
| `names` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/berry-firmness/`

#### BerryFlavor

| Field | Description |
| --- | --- |
| `berries` |  |
| `contest_type` |  |
| `id` |  |
| `name` |  |
| `names` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/berry-flavor/`

#### Characteristic

| Field | Description |
| --- | --- |
| `descriptions` |  |
| `gene_modulo` |  |
| `highest_stat` |  |
| `id` |  |
| `possible_values` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/characteristic/`

#### ContestEffect

| Field | Description |
| --- | --- |
| `appeal` |  |
| `effect_entries` |  |
| `flavor_text_entries` |  |
| `id` |  |
| `jam` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/contest-effect/`

#### ContestType

| Field | Description |
| --- | --- |
| `berry_flavor` |  |
| `id` |  |
| `name` |  |
| `names` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/contest-type/`

#### Currency

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `names` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/currency/`

#### EggGroup

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `names` |  |
| `pokemon_species` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/egg-group/`

#### EncounterCondition

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `names` |  |
| `url` |  |
| `values` |  |

Operations: list, load.

API path: `/api/v2/encounter-condition/`

#### EncounterConditionValue

| Field | Description |
| --- | --- |
| `condition` |  |
| `id` |  |
| `name` |  |
| `names` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/encounter-condition-value/`

#### EncounterMethod

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `names` |  |
| `order` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/encounter-method/`

#### EvolutionChain

| Field | Description |
| --- | --- |
| `baby_trigger_item` |  |
| `chain` |  |
| `id` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/evolution-chain/`

#### EvolutionTrigger

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `names` |  |
| `pokemon_species` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/evolution-trigger/`

#### EvolutionVariable

| Field | Description |
| --- | --- |
| `data_type` |  |
| `descriptions` |  |
| `id` |  |
| `name` |  |
| `names` |  |
| `source` | Where the value comes from: 'pokemon' for data stored on the Pokemon (e.g. |
| `symbol` |  |
| `url` |  |
| `version_group` |  |

Operations: list, load.

API path: `/api/v2/evolution-variable/`

#### Gender

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `pokemon_species_details` |  |
| `required_for_evolution` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/gender/`

#### Generation

| Field | Description |
| --- | --- |
| `abilities` |  |
| `id` |  |
| `main_region` |  |
| `moves` |  |
| `name` |  |
| `names` |  |
| `pokemon_species` |  |
| `types` |  |
| `url` |  |
| `version_groups` |  |

Operations: list, load.

API path: `/api/v2/generation/`

#### GrowthRate

| Field | Description |
| --- | --- |
| `descriptions` |  |
| `formula` |  |
| `id` |  |
| `levels` |  |
| `name` |  |
| `pokemon_species` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/growth-rate/`

#### Item

| Field | Description |
| --- | --- |
| `attributes` |  |
| `baby_trigger_for` |  |
| `category` |  |
| `effect_entries` |  |
| `flavor_text_entries` |  |
| `fling_effect` |  |
| `fling_power` |  |
| `game_indices` |  |
| `held_by_pokemon` |  |
| `id` |  |
| `machines` |  |
| `name` |  |
| `names` |  |
| `prices` |  |
| `sprites` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/item/`

#### ItemAttribute

| Field | Description |
| --- | --- |
| `descriptions` |  |
| `id` |  |
| `items` |  |
| `name` |  |
| `names` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/item-attribute/`

#### ItemCategory

| Field | Description |
| --- | --- |
| `id` |  |
| `items` |  |
| `name` |  |
| `names` |  |
| `pocket` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/item-category/`

#### ItemFlingEffect

| Field | Description |
| --- | --- |
| `effect_entries` |  |
| `id` |  |
| `items` |  |
| `name` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/item-fling-effect/`

#### ItemPocket

| Field | Description |
| --- | --- |
| `categories` |  |
| `id` |  |
| `name` |  |
| `names` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/item-pocket/`

#### Language

| Field | Description |
| --- | --- |
| `id` |  |
| `iso3166` |  |
| `iso639` |  |
| `name` |  |
| `names` |  |
| `official` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/language/`

#### Location

| Field | Description |
| --- | --- |
| `areas` |  |
| `game_indices` |  |
| `id` |  |
| `name` |  |
| `names` |  |
| `region` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/location/`

#### LocationArea

| Field | Description |
| --- | --- |
| `encounter_method_rates` |  |
| `game_index` |  |
| `id` |  |
| `location` |  |
| `name` |  |
| `names` |  |
| `pokemon_encounters` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/location-area/`

#### Machine

| Field | Description |
| --- | --- |
| `id` |  |
| `item` |  |
| `move` |  |
| `url` |  |
| `version_group` |  |

Operations: list, load.

API path: `/api/v2/machine/`

#### Move

| Field | Description |
| --- | --- |
| `accuracy` |  |
| `contest_combos` |  |
| `contest_effect` |  |
| `contest_type` |  |
| `damage_class` |  |
| `descriptions` |  |
| `effect_chance` |  |
| `effect_changes` |  |
| `effect_entries` |  |
| `flavor_text_entries` |  |
| `generation` |  |
| `id` |  |
| `learned_by_pokemon` |  |
| `machines` |  |
| `meta` |  |
| `moves` |  |
| `name` |  |
| `names` |  |
| `past_values` |  |
| `power` |  |
| `pp` |  |
| `priority` |  |
| `stat_changes` |  |
| `super_contest_effect` |  |
| `target` |  |
| `type` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/move-ailment/`

#### MoveBattleStyle

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `names` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/move-battle-style/`

#### MoveDamageClass

| Field | Description |
| --- | --- |
| `descriptions` |  |
| `id` |  |
| `moves` |  |
| `name` |  |
| `names` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/move-damage-class/`

#### MoveLearnMethod

| Field | Description |
| --- | --- |
| `descriptions` |  |
| `id` |  |
| `name` |  |
| `names` |  |
| `url` |  |
| `version_groups` |  |

Operations: list, load.

API path: `/api/v2/move-learn-method/`

#### MoveTarget

| Field | Description |
| --- | --- |
| `descriptions` |  |
| `id` |  |
| `moves` |  |
| `name` |  |
| `names` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/move-target/`

#### Nature

| Field | Description |
| --- | --- |
| `berries` |  |
| `decreased_stat` |  |
| `hates_flavor` |  |
| `id` |  |
| `increased_stat` |  |
| `likes_flavor` |  |
| `move_battle_style_preferences` |  |
| `name` |  |
| `names` |  |
| `pokeathlon_stat_changes` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/nature/`

#### PalParkArea

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `names` |  |
| `pokemon_encounters` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/pal-park-area/`

#### PokeathlonStat

| Field | Description |
| --- | --- |
| `affecting_natures` |  |
| `id` |  |
| `name` |  |
| `names` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/pokeathlon-stat/`

#### Pokedex

| Field | Description |
| --- | --- |
| `descriptions` |  |
| `id` |  |
| `is_main_series` |  |
| `name` |  |
| `names` |  |
| `pokemon_entries` |  |
| `region` |  |
| `url` |  |
| `version_groups` |  |

Operations: list, load.

API path: `/api/v2/pokedex/`

#### Pokemon

| Field | Description |
| --- | --- |
| `abilities` |  |
| `base_experience` |  |
| `cries` |  |
| `forms` |  |
| `game_indices` |  |
| `height` |  |
| `held_items` |  |
| `id` |  |
| `is_default` |  |
| `location_area_encounters` |  |
| `moves` |  |
| `name` |  |
| `order` |  |
| `past_abilities` |  |
| `past_stats` |  |
| `past_types` |  |
| `species` |  |
| `sprites` |  |
| `stats` |  |
| `types` |  |
| `url` |  |
| `weight` |  |

Operations: list, load.

API path: `/api/v2/pokemon/`

#### PokemonColor

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `names` |  |
| `pokemon_species` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/pokemon-color/`

#### PokemonEncounter

| Field | Description |
| --- | --- |
| `id` |  |
| `location_area` |  |
| `version_details` |  |

Operations: list.

API path: `/api/v2/pokemon/{pokemon_id}/encounters`

#### PokemonForm

| Field | Description |
| --- | --- |
| `flavor_text_entries` |  |
| `form_name` |  |
| `form_names` |  |
| `form_order` |  |
| `id` |  |
| `is_battle_only` |  |
| `is_default` |  |
| `is_mega` |  |
| `name` |  |
| `names` |  |
| `order` |  |
| `pokemon` |  |
| `sprites` |  |
| `trigger_conditions` |  |
| `types` |  |
| `url` |  |
| `version_group` |  |

Operations: list, load.

API path: `/api/v2/pokemon-form/`

#### PokemonHabitat

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `names` |  |
| `pokemon_species` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/pokemon-habitat/`

#### PokemonShape

| Field | Description |
| --- | --- |
| `awesome_names` |  |
| `id` |  |
| `name` |  |
| `names` |  |
| `pokemon_species` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/pokemon-shape/`

#### PokemonSpecies

| Field | Description |
| --- | --- |
| `base_happiness` |  |
| `capture_rate` |  |
| `color` |  |
| `egg_groups` |  |
| `evolution_chain` |  |
| `evolves_from_species` |  |
| `flavor_text_entries` |  |
| `form_descriptions` |  |
| `forms_switchable` |  |
| `gender_rate` |  |
| `genera` |  |
| `generation` |  |
| `growth_rate` |  |
| `habitat` |  |
| `has_gender_differences` |  |
| `hatch_counter` |  |
| `id` |  |
| `is_baby` |  |
| `is_legendary` |  |
| `is_mythical` |  |
| `name` |  |
| `names` |  |
| `order` |  |
| `pal_park_encounters` |  |
| `pokedex_numbers` |  |
| `shape` |  |
| `url` |  |
| `varieties` |  |

Operations: list, load.

API path: `/api/v2/pokemon-species/`

#### Region

| Field | Description |
| --- | --- |
| `id` |  |
| `locations` |  |
| `main_generation` |  |
| `name` |  |
| `names` |  |
| `pokedexes` |  |
| `url` |  |
| `version_groups` |  |

Operations: list, load.

API path: `/api/v2/region/`

#### Stat

| Field | Description |
| --- | --- |
| `affecting_items` |  |
| `affecting_moves` |  |
| `affecting_natures` |  |
| `characteristics` |  |
| `game_index` |  |
| `id` |  |
| `is_battle_only` |  |
| `move_damage_class` |  |
| `name` |  |
| `names` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/stat/`

#### SuperContestEffect

| Field | Description |
| --- | --- |
| `appeal` |  |
| `flavor_text_entries` |  |
| `id` |  |
| `moves` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/super-contest-effect/`

#### Type

| Field | Description |
| --- | --- |
| `damage_relations` |  |
| `game_indices` |  |
| `generation` |  |
| `id` |  |
| `move_damage_class` |  |
| `moves` |  |
| `name` |  |
| `names` |  |
| `past_damage_relations` |  |
| `pokemon` |  |
| `sprites` |  |
| `url` |  |

Operations: list, load.

API path: `/api/v2/type/`

#### Utility

| Field | Description |
| --- | --- |
| `deploy_date` |  |
| `hash` |  |
| `tag` |  |

Operations: load.

API path: `/api/v2/meta/`

#### Version

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `names` |  |
| `url` |  |
| `version_group` |  |

Operations: list, load.

API path: `/api/v2/version/`

#### VersionGroup

| Field | Description |
| --- | --- |
| `generation` |  |
| `id` |  |
| `move_learn_methods` |  |
| `name` |  |
| `order` |  |
| `pokedexes` |  |
| `regions` |  |
| `url` |  |
| `versions` |  |

Operations: list, load.

API path: `/api/v2/version-group/`



## Entities


### Ability

Create an instance: `const ability = client.Ability()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `effect_changes` | `any[]` |  |
| `effect_entries` | `any[]` |  |
| `flavor_text_entries` | `any[]` |  |
| `generation` | `Record<string, any>` |  |
| `id` | `number` |  |
| `is_main_series` | `boolean` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `pokemon` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const ability = await client.Ability().load({ id: 'ability_id' })
```

#### Example: List

```ts
const abilitys = await client.Ability().list()
```


### Berry

Create an instance: `const berry = client.Berry()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `firmness` | `Record<string, any>` |  |
| `flavors` | `any[]` |  |
| `growth_time` | `number | null` |  |
| `id` | `number` |  |
| `item` | `Record<string, any>` |  |
| `max_harvest` | `number | null` |  |
| `name` | `string` |  |
| `natural_gift_power` | `number | null` |  |
| `natural_gift_type` | `Record<string, any>` |  |
| `size` | `number | null` |  |
| `smoothness` | `number | null` |  |
| `soil_dryness` | `number | null` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const berry = await client.Berry().load({ id: 'berry_id' })
```

#### Example: List

```ts
const berrys = await client.Berry().list()
```


### BerryFirmness

Create an instance: `const berry_firmness = client.BerryFirmness()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `berries` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const berry_firmness = await client.BerryFirmness().load({ id: 'berry_firmness_id' })
```

#### Example: List

```ts
const berry_firmnesss = await client.BerryFirmness().list()
```


### BerryFlavor

Create an instance: `const berry_flavor = client.BerryFlavor()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `berries` | `any[]` |  |
| `contest_type` | `Record<string, any>` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const berry_flavor = await client.BerryFlavor().load({ id: 'berry_flavor_id' })
```

#### Example: List

```ts
const berry_flavors = await client.BerryFlavor().list()
```


### Characteristic

Create an instance: `const characteristic = client.Characteristic()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `descriptions` | `any[]` |  |
| `gene_modulo` | `number` |  |
| `highest_stat` | `Record<string, any>` |  |
| `id` | `number` |  |
| `possible_values` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const characteristic = await client.Characteristic().load({ id: 'characteristic_id' })
```

#### Example: List

```ts
const characteristics = await client.Characteristic().list()
```


### ContestEffect

Create an instance: `const contest_effect = client.ContestEffect()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appeal` | `number` |  |
| `effect_entries` | `any[]` |  |
| `flavor_text_entries` | `any[]` |  |
| `id` | `number` |  |
| `jam` | `number` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const contest_effect = await client.ContestEffect().load({ id: 'contest_effect_id' })
```

#### Example: List

```ts
const contest_effects = await client.ContestEffect().list()
```


### ContestType

Create an instance: `const contest_type = client.ContestType()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `berry_flavor` | `any` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const contest_type = await client.ContestType().load({ id: 'contest_type_id' })
```

#### Example: List

```ts
const contest_types = await client.ContestType().list()
```


### Currency

Create an instance: `const currency = client.Currency()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const currency = await client.Currency().load({ id: 'currency_id' })
```

#### Example: List

```ts
const currencys = await client.Currency().list()
```


### EggGroup

Create an instance: `const egg_group = client.EggGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `pokemon_species` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const egg_group = await client.EggGroup().load({ id: 'egg_group_id' })
```

#### Example: List

```ts
const egg_groups = await client.EggGroup().list()
```


### EncounterCondition

Create an instance: `const encounter_condition = client.EncounterCondition()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `url` | `string` |  |
| `values` | `any[]` |  |

#### Example: Load

```ts
const encounter_condition = await client.EncounterCondition().load({ id: 'encounter_condition_id' })
```

#### Example: List

```ts
const encounter_conditions = await client.EncounterCondition().list()
```


### EncounterConditionValue

Create an instance: `const encounter_condition_value = client.EncounterConditionValue()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `condition` | `Record<string, any>` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const encounter_condition_value = await client.EncounterConditionValue().load({ id: 'encounter_condition_value_id' })
```

#### Example: List

```ts
const encounter_condition_values = await client.EncounterConditionValue().list()
```


### EncounterMethod

Create an instance: `const encounter_method = client.EncounterMethod()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `order` | `number | null` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const encounter_method = await client.EncounterMethod().load({ id: 'encounter_method_id' })
```

#### Example: List

```ts
const encounter_methods = await client.EncounterMethod().list()
```


### EvolutionChain

Create an instance: `const evolution_chain = client.EvolutionChain()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `baby_trigger_item` | `Record<string, any>` |  |
| `chain` | `any` |  |
| `id` | `number` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const evolution_chain = await client.EvolutionChain().load({ id: 'evolution_chain_id' })
```

#### Example: List

```ts
const evolution_chains = await client.EvolutionChain().list()
```


### EvolutionTrigger

Create an instance: `const evolution_trigger = client.EvolutionTrigger()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `pokemon_species` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const evolution_trigger = await client.EvolutionTrigger().load({ id: 'evolution_trigger_id' })
```

#### Example: List

```ts
const evolution_triggers = await client.EvolutionTrigger().list()
```


### EvolutionVariable

Create an instance: `const evolution_variable = client.EvolutionVariable()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data_type` | `string` |  |
| `descriptions` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `source` | `string` | Where the value comes from: 'pokemon' for data stored on the Pokemon (e.g. |
| `symbol` | `string` |  |
| `url` | `string` |  |
| `version_group` | `Record<string, any>` |  |

#### Example: Load

```ts
const evolution_variable = await client.EvolutionVariable().load({ id: 'evolution_variable_id' })
```

#### Example: List

```ts
const evolution_variables = await client.EvolutionVariable().list()
```


### Gender

Create an instance: `const gender = client.Gender()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |
| `pokemon_species_details` | `any[]` |  |
| `required_for_evolution` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const gender = await client.Gender().load({ id: 'gender_id' })
```

#### Example: List

```ts
const genders = await client.Gender().list()
```


### Generation

Create an instance: `const generation = client.Generation()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abilities` | `any[]` |  |
| `id` | `number` |  |
| `main_region` | `Record<string, any>` |  |
| `moves` | `any[]` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `pokemon_species` | `any[]` |  |
| `types` | `any[]` |  |
| `url` | `string` |  |
| `version_groups` | `any[]` |  |

#### Example: Load

```ts
const generation = await client.Generation().load({ id: 'generation_id' })
```

#### Example: List

```ts
const generations = await client.Generation().list()
```


### GrowthRate

Create an instance: `const growth_rate = client.GrowthRate()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `descriptions` | `any[]` |  |
| `formula` | `string` |  |
| `id` | `number` |  |
| `levels` | `any[]` |  |
| `name` | `string` |  |
| `pokemon_species` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const growth_rate = await client.GrowthRate().load({ id: 'growth_rate_id' })
```

#### Example: List

```ts
const growth_rates = await client.GrowthRate().list()
```


### Item

Create an instance: `const item = client.Item()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attributes` | `any[]` |  |
| `baby_trigger_for` | `any` |  |
| `category` | `Record<string, any>` |  |
| `effect_entries` | `any[]` |  |
| `flavor_text_entries` | `any[]` |  |
| `fling_effect` | `Record<string, any>` |  |
| `fling_power` | `number | null` |  |
| `game_indices` | `any[]` |  |
| `held_by_pokemon` | `any[]` |  |
| `id` | `number` |  |
| `machines` | `any[]` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `prices` | `any[]` |  |
| `sprites` | `any` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const item = await client.Item().load({ id: 'item_id' })
```

#### Example: List

```ts
const items = await client.Item().list()
```


### ItemAttribute

Create an instance: `const item_attribute = client.ItemAttribute()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `descriptions` | `any[]` |  |
| `id` | `number` |  |
| `items` | `any[]` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const item_attribute = await client.ItemAttribute().load({ id: 'item_attribute_id' })
```

#### Example: List

```ts
const item_attributes = await client.ItemAttribute().list()
```


### ItemCategory

Create an instance: `const item_category = client.ItemCategory()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `items` | `any[]` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `pocket` | `Record<string, any>` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const item_category = await client.ItemCategory().load({ id: 'item_category_id' })
```

#### Example: List

```ts
const item_categorys = await client.ItemCategory().list()
```


### ItemFlingEffect

Create an instance: `const item_fling_effect = client.ItemFlingEffect()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `effect_entries` | `any[]` |  |
| `id` | `number` |  |
| `items` | `any[]` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const item_fling_effect = await client.ItemFlingEffect().load({ id: 'item_fling_effect_id' })
```

#### Example: List

```ts
const item_fling_effects = await client.ItemFlingEffect().list()
```


### ItemPocket

Create an instance: `const item_pocket = client.ItemPocket()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `categories` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const item_pocket = await client.ItemPocket().load({ id: 'item_pocket_id' })
```

#### Example: List

```ts
const item_pockets = await client.ItemPocket().list()
```


### Language

Create an instance: `const language = client.Language()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `iso3166` | `string` |  |
| `iso639` | `string` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `official` | `boolean` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const language = await client.Language().load({ id: 'language_id' })
```

#### Example: List

```ts
const languages = await client.Language().list()
```


### Location

Create an instance: `const location = client.Location()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `areas` | `any[]` |  |
| `game_indices` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `region` | `any` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const location = await client.Location().load({ id: 'location_id' })
```

#### Example: List

```ts
const locations = await client.Location().list()
```


### LocationArea

Create an instance: `const location_area = client.LocationArea()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `encounter_method_rates` | `any[]` |  |
| `game_index` | `number` |  |
| `id` | `number` |  |
| `location` | `Record<string, any>` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `pokemon_encounters` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const location_area = await client.LocationArea().load({ id: 1 })
```

#### Example: List

```ts
const location_areas = await client.LocationArea().list()
```


### Machine

Create an instance: `const machine = client.Machine()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `item` | `Record<string, any>` |  |
| `move` | `Record<string, any>` |  |
| `url` | `string` |  |
| `version_group` | `Record<string, any>` |  |

#### Example: Load

```ts
const machine = await client.Machine().load({ id: 'machine_id' })
```

#### Example: List

```ts
const machines = await client.Machine().list()
```


### Move

Create an instance: `const move = client.Move()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `accuracy` | `number | null` |  |
| `contest_combos` | `any` |  |
| `contest_effect` | `Record<string, any>` |  |
| `contest_type` | `Record<string, any>` |  |
| `damage_class` | `Record<string, any>` |  |
| `descriptions` | `any[]` |  |
| `effect_chance` | `number` |  |
| `effect_changes` | `any[]` |  |
| `effect_entries` | `any[]` |  |
| `flavor_text_entries` | `any[]` |  |
| `generation` | `Record<string, any>` |  |
| `id` | `number` |  |
| `learned_by_pokemon` | `any[]` |  |
| `machines` | `any[]` |  |
| `meta` | `any` |  |
| `moves` | `any[]` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `past_values` | `any[]` |  |
| `power` | `number | null` |  |
| `pp` | `number | null` |  |
| `priority` | `number | null` |  |
| `stat_changes` | `any[]` |  |
| `super_contest_effect` | `Record<string, any>` |  |
| `target` | `Record<string, any>` |  |
| `type` | `Record<string, any>` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const move = await client.Move().load({ id: 'move_id' })
```

#### Example: List

```ts
const moves = await client.Move().list()
```


### MoveBattleStyle

Create an instance: `const move_battle_style = client.MoveBattleStyle()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const move_battle_style = await client.MoveBattleStyle().load({ id: 'move_battle_style_id' })
```

#### Example: List

```ts
const move_battle_styles = await client.MoveBattleStyle().list()
```


### MoveDamageClass

Create an instance: `const move_damage_class = client.MoveDamageClass()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `descriptions` | `any[]` |  |
| `id` | `number` |  |
| `moves` | `any[]` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const move_damage_class = await client.MoveDamageClass().load({ id: 'move_damage_class_id' })
```

#### Example: List

```ts
const move_damage_classs = await client.MoveDamageClass().list()
```


### MoveLearnMethod

Create an instance: `const move_learn_method = client.MoveLearnMethod()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `descriptions` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `url` | `string` |  |
| `version_groups` | `any[]` |  |

#### Example: Load

```ts
const move_learn_method = await client.MoveLearnMethod().load({ id: 'move_learn_method_id' })
```

#### Example: List

```ts
const move_learn_methods = await client.MoveLearnMethod().list()
```


### MoveTarget

Create an instance: `const move_target = client.MoveTarget()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `descriptions` | `any[]` |  |
| `id` | `number` |  |
| `moves` | `any[]` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const move_target = await client.MoveTarget().load({ id: 'move_target_id' })
```

#### Example: List

```ts
const move_targets = await client.MoveTarget().list()
```


### Nature

Create an instance: `const nature = client.Nature()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `berries` | `any[]` |  |
| `decreased_stat` | `Record<string, any>` |  |
| `hates_flavor` | `Record<string, any>` |  |
| `id` | `number` |  |
| `increased_stat` | `Record<string, any>` |  |
| `likes_flavor` | `Record<string, any>` |  |
| `move_battle_style_preferences` | `any[]` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `pokeathlon_stat_changes` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const nature = await client.Nature().load({ id: 'nature_id' })
```

#### Example: List

```ts
const natures = await client.Nature().list()
```


### PalParkArea

Create an instance: `const pal_park_area = client.PalParkArea()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `pokemon_encounters` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const pal_park_area = await client.PalParkArea().load({ id: 'pal_park_area_id' })
```

#### Example: List

```ts
const pal_park_areas = await client.PalParkArea().list()
```


### PokeathlonStat

Create an instance: `const pokeathlon_stat = client.PokeathlonStat()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affecting_natures` | `any` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const pokeathlon_stat = await client.PokeathlonStat().load({ id: 'pokeathlon_stat_id' })
```

#### Example: List

```ts
const pokeathlon_stats = await client.PokeathlonStat().list()
```


### Pokedex

Create an instance: `const pokedex = client.Pokedex()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `descriptions` | `any[]` |  |
| `id` | `number` |  |
| `is_main_series` | `boolean` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `pokemon_entries` | `any[]` |  |
| `region` | `Record<string, any>` |  |
| `url` | `string` |  |
| `version_groups` | `any[]` |  |

#### Example: Load

```ts
const pokedex = await client.Pokedex().load({ id: 'pokedex_id' })
```

#### Example: List

```ts
const pokedexs = await client.Pokedex().list()
```


### Pokemon

Create an instance: `const pokemon = client.Pokemon()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abilities` | `any[]` |  |
| `base_experience` | `number | null` |  |
| `cries` | `any` |  |
| `forms` | `any[]` |  |
| `game_indices` | `any[]` |  |
| `height` | `number | null` |  |
| `held_items` | `any[]` |  |
| `id` | `number` |  |
| `is_default` | `boolean` |  |
| `location_area_encounters` | `string` |  |
| `moves` | `any[]` |  |
| `name` | `string` |  |
| `order` | `number | null` |  |
| `past_abilities` | `any[]` |  |
| `past_stats` | `any[]` |  |
| `past_types` | `any[]` |  |
| `species` | `Record<string, any>` |  |
| `sprites` | `any` |  |
| `stats` | `any[]` |  |
| `types` | `any[]` |  |
| `url` | `string` |  |
| `weight` | `number | null` |  |

#### Example: Load

```ts
const pokemon = await client.Pokemon().load({ id: 'pokemon_id' })
```

#### Example: List

```ts
const pokemons = await client.Pokemon().list()
```


### PokemonColor

Create an instance: `const pokemon_color = client.PokemonColor()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `pokemon_species` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const pokemon_color = await client.PokemonColor().load({ id: 'pokemon_color_id' })
```

#### Example: List

```ts
const pokemon_colors = await client.PokemonColor().list()
```


### PokemonEncounter

Create an instance: `const pokemon_encounter = client.PokemonEncounter()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `location_area` | `Record<string, any>` |  |
| `version_details` | `any[]` |  |

#### Example: List

```ts
const pokemon_encounters = await client.PokemonEncounter().list({ id: "example" })
```


### PokemonForm

Create an instance: `const pokemon_form = client.PokemonForm()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `flavor_text_entries` | `any[]` |  |
| `form_name` | `string` |  |
| `form_names` | `any[]` |  |
| `form_order` | `number | null` |  |
| `id` | `number` |  |
| `is_battle_only` | `boolean` |  |
| `is_default` | `boolean` |  |
| `is_mega` | `boolean` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `order` | `number | null` |  |
| `pokemon` | `Record<string, any>` |  |
| `sprites` | `any` |  |
| `trigger_conditions` | `any[]` |  |
| `types` | `any[]` |  |
| `url` | `string` |  |
| `version_group` | `Record<string, any>` |  |

#### Example: Load

```ts
const pokemon_form = await client.PokemonForm().load({ id: 'pokemon_form_id' })
```

#### Example: List

```ts
const pokemon_forms = await client.PokemonForm().list()
```


### PokemonHabitat

Create an instance: `const pokemon_habitat = client.PokemonHabitat()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `pokemon_species` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const pokemon_habitat = await client.PokemonHabitat().load({ id: 'pokemon_habitat_id' })
```

#### Example: List

```ts
const pokemon_habitats = await client.PokemonHabitat().list()
```


### PokemonShape

Create an instance: `const pokemon_shape = client.PokemonShape()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `awesome_names` | `any[]` |  |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `pokemon_species` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const pokemon_shape = await client.PokemonShape().load({ id: 'pokemon_shape_id' })
```

#### Example: List

```ts
const pokemon_shapes = await client.PokemonShape().list()
```


### PokemonSpecies

Create an instance: `const pokemon_species = client.PokemonSpecies()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `base_happiness` | `number | null` |  |
| `capture_rate` | `number | null` |  |
| `color` | `Record<string, any>` |  |
| `egg_groups` | `any[]` |  |
| `evolution_chain` | `Record<string, any>` |  |
| `evolves_from_species` | `Record<string, any>` |  |
| `flavor_text_entries` | `any[]` |  |
| `form_descriptions` | `any[]` |  |
| `forms_switchable` | `boolean` |  |
| `gender_rate` | `number | null` |  |
| `genera` | `any[]` |  |
| `generation` | `Record<string, any>` |  |
| `growth_rate` | `Record<string, any>` |  |
| `habitat` | `Record<string, any>` |  |
| `has_gender_differences` | `boolean` |  |
| `hatch_counter` | `number | null` |  |
| `id` | `number` |  |
| `is_baby` | `boolean` |  |
| `is_legendary` | `boolean` |  |
| `is_mythical` | `boolean` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `order` | `number | null` |  |
| `pal_park_encounters` | `any[]` |  |
| `pokedex_numbers` | `any[]` |  |
| `shape` | `Record<string, any>` |  |
| `url` | `string` |  |
| `varieties` | `any[]` |  |

#### Example: Load

```ts
const pokemon_species = await client.PokemonSpecies().load({ id: 'pokemon_species_id' })
```

#### Example: List

```ts
const pokemon_speciess = await client.PokemonSpecies().list()
```


### Region

Create an instance: `const region = client.Region()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `locations` | `any[]` |  |
| `main_generation` | `any` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `pokedexes` | `any[]` |  |
| `url` | `string` |  |
| `version_groups` | `any[]` |  |

#### Example: Load

```ts
const region = await client.Region().load({ id: 'region_id' })
```

#### Example: List

```ts
const regions = await client.Region().list()
```


### Stat

Create an instance: `const stat = client.Stat()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `affecting_items` | `any[]` |  |
| `affecting_moves` | `any` |  |
| `affecting_natures` | `any` |  |
| `characteristics` | `any[]` |  |
| `game_index` | `number` |  |
| `id` | `number` |  |
| `is_battle_only` | `boolean` |  |
| `move_damage_class` | `Record<string, any>` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const stat = await client.Stat().load({ id: 'stat_id' })
```

#### Example: List

```ts
const stats = await client.Stat().list()
```


### SuperContestEffect

Create an instance: `const super_contest_effect = client.SuperContestEffect()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `appeal` | `number` |  |
| `flavor_text_entries` | `any[]` |  |
| `id` | `number` |  |
| `moves` | `any[]` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const super_contest_effect = await client.SuperContestEffect().load({ id: 'super_contest_effect_id' })
```

#### Example: List

```ts
const super_contest_effects = await client.SuperContestEffect().list()
```


### Type

Create an instance: `const type = client.Type()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `damage_relations` | `any` |  |
| `game_indices` | `any[]` |  |
| `generation` | `Record<string, any>` |  |
| `id` | `number` |  |
| `move_damage_class` | `Record<string, any>` |  |
| `moves` | `any[]` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `past_damage_relations` | `any[]` |  |
| `pokemon` | `any[]` |  |
| `sprites` | `any` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const type = await client.Type().load({ id: 'type_id' })
```

#### Example: List

```ts
const types = await client.Type().list()
```


### Utility

Create an instance: `const utility = client.Utility()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deploy_date` | `string | null` |  |
| `hash` | `string | null` |  |
| `tag` | `string | null` |  |

#### Example: Load

```ts
const utility = await client.Utility().load()
```


### Version

Create an instance: `const version = client.Version()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` |  |
| `name` | `string` |  |
| `names` | `any[]` |  |
| `url` | `string` |  |
| `version_group` | `Record<string, any>` |  |

#### Example: Load

```ts
const version = await client.Version().load({ id: 'version_id' })
```

#### Example: List

```ts
const versions = await client.Version().list()
```


### VersionGroup

Create an instance: `const version_group = client.VersionGroup()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `generation` | `Record<string, any>` |  |
| `id` | `number` |  |
| `move_learn_methods` | `any[]` |  |
| `name` | `string` |  |
| `order` | `number | null` |  |
| `pokedexes` | `any[]` |  |
| `regions` | `any[]` |  |
| `url` | `string` |  |
| `versions` | `any[]` |  |

#### Example: Load

```ts
const version_group = await client.VersionGroup().load({ id: 'version_group_id' })
```

#### Example: List

```ts
const version_groups = await client.VersionGroup().list()
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
pokeapi-sdk/
├── src/
│   ├── PokeapiSdkSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { PokeapiSdkSDK } from '@voxgig-sdk/pokeapi-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const berryflavor = client.BerryFlavor()
await berryflavor.list()

// berryflavor.data() now returns the berryflavor data from the last `list`
// berryflavor.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
