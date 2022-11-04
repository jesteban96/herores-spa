import { heroes } from "../data/Heroes"

export const getHeroesByName = ( superhero = '' ) => {
    
    superhero = superhero.toLowerCase().trim();

    if(superhero.length == 0) return [];

    return heroes.filter(hero => hero.superhero.toLowerCase().includes(superhero));
}