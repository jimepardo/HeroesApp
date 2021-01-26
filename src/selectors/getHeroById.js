import {heroes } from '../data/heores';

export const getHeroById = (id) => {
    return heroes.find( hero => hero.id === id);
}