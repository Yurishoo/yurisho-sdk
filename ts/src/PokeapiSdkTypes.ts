// Typed models for the PokeapiSdk SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Ability {
  effect_changes: any[]
  effect_entries: any[]
  flavor_text_entries: any[]
  generation: Record<string, any>
  id: number
  is_main_series?: boolean
  name: string
  names: any[]
  pokemon: any[]
  url: string
}

export interface AbilityLoadMatch {
  id: string
}

export interface AbilityListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Berry {
  firmness: Record<string, any>
  flavors: any[]
  growth_time?: number | null
  id: number
  item: Record<string, any>
  max_harvest?: number | null
  name: string
  natural_gift_power?: number | null
  natural_gift_type: Record<string, any>
  size?: number | null
  smoothness?: number | null
  soil_dryness?: number | null
  url: string
}

export interface BerryLoadMatch {
  id: string
}

export interface BerryListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface BerryFirmness {
  berries: any[]
  id: number
  name: string
  names: any[]
  url: string
}

export interface BerryFirmnessLoadMatch {
  id: string
}

export interface BerryFirmnessListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface BerryFlavor {
  berries: any[]
  contest_type: Record<string, any>
  id: number
  name: string
  names: any[]
  url: string
}

export interface BerryFlavorLoadMatch {
  id: string
}

export interface BerryFlavorListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Characteristic {
  descriptions: any[]
  gene_modulo: number
  highest_stat: Record<string, any>
  id: number
  possible_values: any[]
  url: string
}

export interface CharacteristicLoadMatch {
  id: string
}

export interface CharacteristicListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface ContestEffect {
  appeal: number
  effect_entries: any[]
  flavor_text_entries: any[]
  id: number
  jam: number
  url: string
}

export interface ContestEffectLoadMatch {
  id: string
}

export interface ContestEffectListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface ContestType {
  berry_flavor: any
  id: number
  name: string
  names: any[]
  url: string
}

export interface ContestTypeLoadMatch {
  id: string
}

export interface ContestTypeListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Currency {
  id: number
  name: string
  names: any[]
  url: string
}

export interface CurrencyLoadMatch {
  id: string
}

export interface CurrencyListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface EggGroup {
  id: number
  name: string
  names: any[]
  pokemon_species: any[]
  url: string
}

export interface EggGroupLoadMatch {
  id: string
}

export interface EggGroupListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface EncounterCondition {
  id: number
  name: string
  names: any[]
  url: string
  values: any[]
}

export interface EncounterConditionLoadMatch {
  id: string
}

export interface EncounterConditionListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface EncounterConditionValue {
  condition: Record<string, any>
  id: number
  name: string
  names: any[]
  url: string
}

export interface EncounterConditionValueLoadMatch {
  id: string
}

export interface EncounterConditionValueListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface EncounterMethod {
  id: number
  name: string
  names: any[]
  order?: number | null
  url: string
}

export interface EncounterMethodLoadMatch {
  id: string
}

export interface EncounterMethodListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface EvolutionChain {
  baby_trigger_item: Record<string, any>
  chain: any
  id: number
  url: string
}

export interface EvolutionChainLoadMatch {
  id: string
}

export interface EvolutionChainListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface EvolutionTrigger {
  id: number
  name: string
  names: any[]
  pokemon_species: any[]
  url: string
}

export interface EvolutionTriggerLoadMatch {
  id: string
}

export interface EvolutionTriggerListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface EvolutionVariable {
  data_type?: string
  descriptions: any[]
  id: number
  name: string
  names: any[]
  source?: string
  symbol: string
  url: string
  version_group: Record<string, any>
}

export interface EvolutionVariableLoadMatch {
  id: string
}

export interface EvolutionVariableListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Gender {
  id: number
  name: string
  pokemon_species_details: any[]
  required_for_evolution: any[]
  url: string
}

export interface GenderLoadMatch {
  id: string
}

export interface GenderListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Generation {
  abilities: any[]
  id: number
  main_region: Record<string, any>
  moves: any[]
  name: string
  names: any[]
  pokemon_species: any[]
  types: any[]
  url: string
  version_groups: any[]
}

export interface GenerationLoadMatch {
  id: string
}

export interface GenerationListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface GrowthRate {
  descriptions: any[]
  formula: string
  id: number
  levels: any[]
  name: string
  pokemon_species: any[]
  url: string
}

export interface GrowthRateLoadMatch {
  id: string
}

export interface GrowthRateListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Item {
  attributes: any[]
  baby_trigger_for: any
  category: Record<string, any>
  effect_entries: any[]
  flavor_text_entries: any[]
  fling_effect: Record<string, any>
  fling_power?: number | null
  game_indices: any[]
  held_by_pokemon: any[]
  id: number
  machines: any[]
  name: string
  names: any[]
  prices: any[]
  sprites: any
  url: string
}

export interface ItemLoadMatch {
  id: string
}

export interface ItemListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface ItemAttribute {
  descriptions: any[]
  id: number
  items: any[]
  name: string
  names: any[]
  url: string
}

export interface ItemAttributeLoadMatch {
  id: string
}

export interface ItemAttributeListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface ItemCategory {
  id: number
  items: any[]
  name: string
  names: any[]
  pocket: Record<string, any>
  url: string
}

export interface ItemCategoryLoadMatch {
  id: string
}

export interface ItemCategoryListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface ItemFlingEffect {
  effect_entries: any[]
  id: number
  items: any[]
  name: string
  url: string
}

export interface ItemFlingEffectLoadMatch {
  id: string
}

export interface ItemFlingEffectListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface ItemPocket {
  categories: any[]
  id: number
  name: string
  names: any[]
  url: string
}

export interface ItemPocketLoadMatch {
  id: string
}

export interface ItemPocketListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Language {
  id: number
  iso3166: string
  iso639: string
  name: string
  names: any[]
  official?: boolean
  url: string
}

export interface LanguageLoadMatch {
  id: string
}

export interface LanguageListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Location {
  areas: any[]
  game_indices: any[]
  id: number
  name: string
  names: any[]
  region: any
  url: string
}

export interface LocationLoadMatch {
  id: string
}

export interface LocationListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface LocationArea {
  encounter_method_rates: any[]
  game_index: number
  id: number
  location: Record<string, any>
  name: string
  names: any[]
  pokemon_encounters: any[]
  url: string
}

export interface LocationAreaLoadMatch {
  id: number
}

export interface LocationAreaListMatch {
  limit?: number
  offset?: number
}

export interface Machine {
  id: number
  item: Record<string, any>
  move: Record<string, any>
  url: string
  version_group: Record<string, any>
}

export interface MachineLoadMatch {
  id: string
}

export interface MachineListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Move {
  accuracy?: number | null
  contest_combos: any
  contest_effect: Record<string, any>
  contest_type: Record<string, any>
  damage_class: Record<string, any>
  descriptions: any[]
  effect_chance: number
  effect_changes: any[]
  effect_entries: any[]
  flavor_text_entries: any[]
  generation: Record<string, any>
  id: number
  learned_by_pokemon: any[]
  machines: any[]
  meta: any
  moves: any[]
  name: string
  names: any[]
  past_values: any[]
  power?: number | null
  pp?: number | null
  priority?: number | null
  stat_changes: any[]
  super_contest_effect: Record<string, any>
  target: Record<string, any>
  type: Record<string, any>
  url: string
}

export interface MoveLoadMatch {
  id: string
}

export interface MoveListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface MoveBattleStyle {
  id: number
  name: string
  names: any[]
  url: string
}

export interface MoveBattleStyleLoadMatch {
  id: string
}

export interface MoveBattleStyleListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface MoveDamageClass {
  descriptions: any[]
  id: number
  moves: any[]
  name: string
  names: any[]
  url: string
}

export interface MoveDamageClassLoadMatch {
  id: string
}

export interface MoveDamageClassListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface MoveLearnMethod {
  descriptions: any[]
  id: number
  name: string
  names: any[]
  url: string
  version_groups: any[]
}

export interface MoveLearnMethodLoadMatch {
  id: string
}

export interface MoveLearnMethodListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface MoveTarget {
  descriptions: any[]
  id: number
  moves: any[]
  name: string
  names: any[]
  url: string
}

export interface MoveTargetLoadMatch {
  id: string
}

export interface MoveTargetListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Nature {
  berries: any[]
  decreased_stat: Record<string, any>
  hates_flavor: Record<string, any>
  id: number
  increased_stat: Record<string, any>
  likes_flavor: Record<string, any>
  move_battle_style_preferences: any[]
  name: string
  names: any[]
  pokeathlon_stat_changes: any[]
  url: string
}

export interface NatureLoadMatch {
  id: string
}

export interface NatureListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface PalParkArea {
  id: number
  name: string
  names: any[]
  pokemon_encounters: any[]
  url: string
}

export interface PalParkAreaLoadMatch {
  id: string
}

export interface PalParkAreaListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface PokeathlonStat {
  affecting_natures: any
  id: number
  name: string
  names: any[]
  url: string
}

export interface PokeathlonStatLoadMatch {
  id: string
}

export interface PokeathlonStatListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Pokedex {
  descriptions: any[]
  id: number
  is_main_series?: boolean
  name: string
  names: any[]
  pokemon_entries: any[]
  region: Record<string, any>
  url: string
  version_groups: any[]
}

export interface PokedexLoadMatch {
  id: string
}

export interface PokedexListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Pokemon {
  abilities: any[]
  base_experience?: number | null
  cries: any
  forms: any[]
  game_indices: any[]
  height?: number | null
  held_items: any[]
  id: number
  is_default?: boolean
  location_area_encounters: string
  moves: any[]
  name: string
  order?: number | null
  past_abilities: any[]
  past_stats: any[]
  past_types: any[]
  species: Record<string, any>
  sprites: any
  stats: any[]
  types: any[]
  url: string
  weight?: number | null
}

export interface PokemonLoadMatch {
  id: string
}

export interface PokemonListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface PokemonColor {
  id: number
  name: string
  names: any[]
  pokemon_species: any[]
  url: string
}

export interface PokemonColorLoadMatch {
  id: string
}

export interface PokemonColorListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface PokemonEncounter {
  id?: string
  location_area: Record<string, any>
  version_details: any[]
}

export interface PokemonEncounterListMatch {
  id: string
}

export interface PokemonForm {
  flavor_text_entries: any[]
  form_name: string
  form_names: any[]
  form_order?: number | null
  id: number
  is_battle_only?: boolean
  is_default?: boolean
  is_mega?: boolean
  name: string
  names: any[]
  order?: number | null
  pokemon: Record<string, any>
  sprites: any
  trigger_conditions: any[]
  types: any[]
  url: string
  version_group: Record<string, any>
}

export interface PokemonFormLoadMatch {
  id: string
}

export interface PokemonFormListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface PokemonHabitat {
  id: number
  name: string
  names: any[]
  pokemon_species: any[]
  url: string
}

export interface PokemonHabitatLoadMatch {
  id: string
}

export interface PokemonHabitatListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface PokemonShape {
  awesome_names: any[]
  id: number
  name: string
  names: any[]
  pokemon_species: any[]
  url: string
}

export interface PokemonShapeLoadMatch {
  id: string
}

export interface PokemonShapeListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface PokemonSpecies {
  base_happiness?: number | null
  capture_rate?: number | null
  color: Record<string, any>
  egg_groups: any[]
  evolution_chain: Record<string, any>
  evolves_from_species: Record<string, any>
  flavor_text_entries: any[]
  form_descriptions: any[]
  forms_switchable?: boolean
  gender_rate?: number | null
  genera: any[]
  generation: Record<string, any>
  growth_rate: Record<string, any>
  habitat: Record<string, any>
  has_gender_differences?: boolean
  hatch_counter?: number | null
  id: number
  is_baby?: boolean
  is_legendary?: boolean
  is_mythical?: boolean
  name: string
  names: any[]
  order?: number | null
  pal_park_encounters: any[]
  pokedex_numbers: any[]
  shape: Record<string, any>
  url: string
  varieties: any[]
}

export interface PokemonSpeciesLoadMatch {
  id: string
}

export interface PokemonSpeciesListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Region {
  id: number
  locations: any[]
  main_generation: any
  name: string
  names: any[]
  pokedexes: any[]
  url: string
  version_groups: any[]
}

export interface RegionLoadMatch {
  id: string
}

export interface RegionListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Stat {
  affecting_items: any[]
  affecting_moves: any
  affecting_natures: any
  characteristics: any[]
  game_index: number
  id: number
  is_battle_only?: boolean
  move_damage_class: Record<string, any>
  name: string
  names: any[]
  url: string
}

export interface StatLoadMatch {
  id: string
}

export interface StatListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface SuperContestEffect {
  appeal: number
  flavor_text_entries: any[]
  id: number
  moves: any[]
  url: string
}

export interface SuperContestEffectLoadMatch {
  id: string
}

export interface SuperContestEffectListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Type {
  damage_relations: any
  game_indices: any[]
  generation: Record<string, any>
  id: number
  move_damage_class: Record<string, any>
  moves: any[]
  name: string
  names: any[]
  past_damage_relations: any[]
  pokemon: any[]
  sprites: any
  url: string
}

export interface TypeLoadMatch {
  id: string
}

export interface TypeListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface Utility {
  deploy_date: string | null
  hash: string | null
  tag: string | null
}

export interface UtilityLoadMatch {
  deploy_date?: string | null
  hash?: string | null
  tag?: string | null
}

export interface Version {
  id: number
  name: string
  names: any[]
  url: string
  version_group: Record<string, any>
}

export interface VersionLoadMatch {
  id: string
}

export interface VersionListMatch {
  limit?: number
  offset?: number
  q?: string
}

export interface VersionGroup {
  generation: Record<string, any>
  id: number
  move_learn_methods: any[]
  name: string
  order?: number | null
  pokedexes: any[]
  regions: any[]
  url: string
  versions: any[]
}

export interface VersionGroupLoadMatch {
  id: string
}

export interface VersionGroupListMatch {
  limit?: number
  offset?: number
  q?: string
}

