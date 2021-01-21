import React from 'react';
import { heroes } from '../../data/heores';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';


export const SearchScreen = () => {

    const heroesFiltered = heroes;

    const [formValues, handleInputChange] = useForm({
        searchText: ''
    });

    const {searchText} = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText);
    }

    return (
        <div>
            <h1>Búsquedas</h1>
            <hr/>
            <br/>

            <div className="row">
                <div className="col-5">
                    <h4> Formulario de búsqueda </h4>
                    <hr/>

                    <form onSubmit={handleSearch} >
                        <input 
                            type="text" 
                            name="searchText" 
                            placeholder="Busca un heroe" 
                            className="form-control"
                            value={searchText}
                            onChange={handleInputChange}
                            />
                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn m-1 btn-outline-primary"   
                            >
                                Buscar
                            </button>
                        </div>
                        
                    </form>

                </div>

                <div className="col-7">
                    <h4>Resultados</h4>
                    <hr/>
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>

            </div>
        </div>
    )
}
