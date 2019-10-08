export enum RequestState {
    Loading = "Loading",
    Loaded = "Loaded",
    Initial = "Initial",
    Error = "Error"
}

export interface Ability2 {
    name: string;
    url: string;
}

export interface Ability {
    ability: Ability2;
    is_hidden: boolean;
    slot: number;
}

export interface Form {
    name: string;
    url: string;
}

export interface Version {
    name: string;
    url: string;
}

export interface GameIndice {
    game_index: number;
    version: Version;
}

export interface Item {
    name: string;
    url: string;
}

export interface Version2 {
    name: string;
    url: string;
}

export interface VersionDetail {
    rarity: number;
    version: Version2;
}

export interface HeldItem {
    item: Item;
    version_details: VersionDetail[];
}

export interface Move2 {
    name: string;
    url: string;
}

export interface MoveLearnMethod {
    name: string;
    url: string;
}

export interface VersionGroup {
    name: string;
    url: string;
}

export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: MoveLearnMethod;
    version_group: VersionGroup;
}

export interface Move {
    move: Move2;
    version_group_details: VersionGroupDetail[];
}

export interface Species {
    name: string;
    url: string;
}

export interface Sprites {
    back_default: string;
    back_female?: any;
    back_shiny: string;
    back_shiny_female?: any;
    front_default: string;
    front_female?: any;
    front_shiny: string;
    front_shiny_female?: any;
}

export interface Stat2 {
    name: string;
    url: string;
}

export interface Stat {
    base_stat: number;
    effort: number;
    stat: Stat2;
}

export interface Type3 {
    name: string;
    url: string;
}

export interface Type2 {
    slot: number;
    type: Type3;
}

export interface Details {
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    game_indices: GameIndice[];
    height: number;
    held_items: HeldItem[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type2[];
    weight: number;
}

export interface Pokemon {
    name: string;
    id: number;
    url: string;
    details?: Details;
}

export interface PokemonResponse {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[]
}

export interface DoubleDamageFrom {
    name: string;
    url: string;
}

export interface DoubleDamageTo {
    name: string;
    url: string;
}

export interface HalfDamageFrom {
    name: string;
    url: string;
}

export interface HalfDamageTo {
    name: string;
    url: string;
}

export interface NoDamageFrom {
    name: string;
    url: string;
}

export interface DamageRelations {
    double_damage_from: DoubleDamageFrom[];
    double_damage_to: DoubleDamageTo[];
    half_damage_from: HalfDamageFrom[];
    half_damage_to: HalfDamageTo[];
    no_damage_from: NoDamageFrom[];
    no_damage_to: any[];
}

export interface Generation {
    name: string;
    url: string;
}

export interface GameIndice {
    game_index: number;
    generation: Generation;
}

export interface Generation2 {
    name: string;
    url: string;
}

export interface MoveDamageClass {
    name: string;
    url: string;
}

export interface Move {
    name: string;
    url: string;
}

export interface Language {
    name: string;
    url: string;
}

export interface Name {
    language: Language;
    name: string;
}

export interface Pokemon3 {
    name: string;
    url: string;
}

export interface Pokemon2 {
    pokemon: Pokemon3;
    slot: number;
}

export interface TypeDetail {
    damage_relations: DamageRelations;
    game_indices: GameIndice[];
    generation: Generation2;
    id: number;
    move_damage_class: MoveDamageClass;
    moves: Move[];
    name: string;
    names: Name[];
    pokemon: Pokemon2[];
}

export interface Type {
    name: string;
    url: string;
    details: TypeDetail;
}

export type PokedexListCurrentPage = number;
export type PokedexListElementsToShow = number;
export type PokedexListOrderBy = OrderPokedexBy

export enum OrderPokedexBy {
    number = "Number",
    name = "Name",
}

export interface PokedexState {
    pokemons: Pokemon[],
    pokemonsRequestState: RequestState,
    pokemonRequestState: RequestState,

    types: Type[],
    typesRequestState: RequestState,

    pokedexListCurrentPage: PokedexListCurrentPage,
    pokedexListElementsToShow: PokedexListElementsToShow,
    pokedexListOrderBy: PokedexListOrderBy
}