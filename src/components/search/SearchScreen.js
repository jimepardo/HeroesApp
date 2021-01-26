import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';


export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);
    
    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const {searchText} = formValues;
    
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])


    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
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

                    { (q==='') &&   <div className="alert alert-info">
                        Busca un heroe
                    </div>
                    }

                    { (q!=='' && heroesFiltered.length === 0) && <div className="alert alert-danger">
                        No existe ningun heroe llamado {q}
                    </div>
                    }


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
