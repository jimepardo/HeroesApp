import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ( {publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);


    return (
            <div className="row animate__animated animate__fadeIn" data-masonry='{"percentPosition": true }'>
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                            {...hero }
                     />
                ))
            }
            </div>
    )
}
