import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObserversModule } from '@angular/cdk/observers';

@Injectable({
    providedIn: 'root'
})
export class LobetService {

    private ChosenId: string = "";
    private pokedexstring: string = "https://pokeapi.co/api/v2/pokedex/"; // + pokedex name 
    private SinglePokemonstring: string = "https://pokeapi.co/api/v2/pokemon/"; // + pokemon name
    private abilitystring: string = "https://pokeapi.co/api/v2/ability/"; // + ability name
    constructor(private http: HttpClient) { }

    getallpokedex(): Observable<Idexes> {
        return this.http.get<Idexes>(this.pokedexstring);
    }

    getpokedex(dex: string): Observable<Ipokedex> {
        return this.http.get<Ipokedex>(this.pokedexstring + dex);
    }

    getpokemon(pokemon: string): Observable<ISinglePokemon> {
        return this.http.get<ISinglePokemon>(this.SinglePokemonstring + pokemon);
    }

    getability(abilityname: string): Observable<IAbility> {
        return this.http.get<IAbility>(this.abilitystring + abilityname);
    }
}


export interface Result {
    name: string;
    url: string;
}
export interface Idexes {
    count: number;
    next?: any;
    previous?: any;
    results: Result[];
}
export interface Language {
    name: string;
    url: string;
}
export interface Description {
    description: string;
    language: Language;
}
export interface Name {
    language: Language;
    name: string;
}
export interface PokemonSpecies {
    name: string;
    url: string;
}
export interface PokemonEntry {
    entry_number: number;
    pokemon_species: PokemonSpecies;
}
export interface Region {
    name: string;
    url: string;
}
export interface VersionGroup {
    name: string;
    url: string;
}
export interface Ipokedex {
    descriptions: Description[];
    id: number;
    is_main_series: boolean;
    name: string;
    names: Name[];
    pokemon_entries: PokemonEntry[];
    region: Region;
    version_groups: VersionGroup[];
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

export interface Type2 {
    name: string;
    url: string;
}

export interface Type {
    slot: number;
    type: Type2;
}

export interface ISinglePokemon {
    checked:boolean
    abilities: Ability[];
    base_experience: number;
    forms: Form[];
    game_indices: GameIndice[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}
export interface Language {
    name: string;
    url: string;
}

export interface EffectEntry {
    effect: string;
    language: Language;
    short_effect: string;
}

export interface Language2 {
    name: string;
    url: string;
}

export interface VersionGroup {
    name: string;
    url: string;
}

export interface FlavorTextEntry {
    flavor_text: string;
    language: Language2;
    version_group: VersionGroup;
}

export interface Generation {
    name: string;
    url: string;
}

export interface Language3 {
    name: string;
    url: string;
}

export interface Name {
    language: Language3;
    name: string;
}

export interface Pokemon2 {
    name: string;
    url: string;
}

export interface Pokemon {
    is_hidden: boolean;
    pokemon: Pokemon2;
    slot: number;
}

export interface IAbility {
    effect_changes: any[];
    effect_entries: EffectEntry[];
    flavor_text_entries: FlavorTextEntry[];
    generation: Generation;
    id: number;
    is_main_series: boolean;
    name: string;
    names: Name[];
    pokemon: Pokemon[];
}

















