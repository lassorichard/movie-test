import Films from "../data/films.json";
import { Link } from 'react-router-dom';

export const FilmsLayout = () => {
    

      
    return (
    <main>
        <div className="container">
            <ul className="filter">
                <li className="filter__item">All</li>
                <li className="filter__item">New releases</li>
                <li className="filter__item">Most popular</li>
                <li className="filter__item">Trends</li>
                <li className="filter__item">Recomendations</li>
            </ul>

            <section className="layout">
                {Films.map( (film) => {
                    return (
                        <figure key={film.id} className="layout__figure">
                                <img src={film.pictureUrl} alt="Logo Movie Test"  className='layout__img'/>
                                <figcaption className="layout__figcaption">
                                    <h3 className="layout__figcaption__title">{film.title}</h3>
                                    <Link to={`/film/${film.id}`}>
                                        <button className="btn btn--primary">WATCH NOW</button>
                                    </Link>
                                    <Link to={`/film/${film.id}`}>
                                    <button className="btn btn--secondary">MORE INFO</button>
                                    </Link>
                                </figcaption>
                            </figure>
                    )
                })}
            </section>
        </div>
    </main> 
    )    
}