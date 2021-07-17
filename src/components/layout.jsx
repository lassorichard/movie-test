// import { Filter } from '../components/filter'
// import { FilmsCard } from '../components/filmsCard'
import Films from "../data/films.json";
import { Link } from 'react-router-dom';
import { useState } from "react";

export const Layout = () => {
    const [filter, setFilter] = useState('All')

    function getFilter(e) {
        setFilter(e.target.textContent)
    }

    filterSelected()

    function filterSelected() {
        const filterItem = document.querySelectorAll('.filter__item')
        
        filterItem.forEach((item) => {
            if (item.textContent === filter) {
                item.classList.add('filter--active')
            } else {
                item.classList.remove('filter--active')
            }
        })
    }

    return (
        <>
            <ul className="filter container">
                <li className="filter__item filter--active" onClick={getFilter} >All</li>
                <li className="filter__item" onClick={getFilter}>New releases</li>
                <li className="filter__item" onClick={getFilter}>Most popular</li>
                <li className="filter__item" onClick={getFilter}>Trends</li>
                <li className="filter__item" onClick={getFilter}>Recomendations</li>
            </ul>
            <section className="layout container">
                {
                Films.map( (film) => {

                    if(filter === 'All') {
                        return (
                            <figure key={film.id} className="layout__figure">
                                <img src={film.pictureUrl} alt="Logo Movie Test"  className='layout__img'/>
                                <figcaption className="layout__figcaption">
                                    <h3 className="layout__figcaption__title">{film.title}</h3>
                                    <Link to={`/film/${film.id}`}
                                    className='btn'>
                                        <button className="btn btn--primary">WATCH NOW</button>
                                    </Link>
                                    <Link to={`/film/${film.id}`}
                                    className='btn'>
                                    <button className="btn btn--secondary">MORE INFO</button>
                                    </Link>
                                </figcaption>
                            </figure>
                        )
                    } else if (film.filter === filter) {
                        return (
                            <figure key={film.id} className="layout__figure">
                                <img src={film.pictureUrl} alt="Logo Movie Test"  className='layout__img'/>
                                <figcaption className="layout__figcaption">
                                    <h3 className="layout__figcaption__title">{film.title}</h3>
                                    <Link to={`/film/${film.id}`}
                                    className='btn'>
                                        <button className="btn btn--primary">WATCH NOW</button>
                                    </Link>
                                    <Link to={`/film/${film.id}`}
                                    className='btn'>
                                    <button className="btn btn--secondary">MORE INFO</button>
                                    </Link>
                                </figcaption>
                            </figure>
                        )
                    }
                })}
            </section>
        </>
    )
}