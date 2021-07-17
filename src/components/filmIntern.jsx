import { NavBar } from '../components/navBar'
import StarIcon from '../img/star.svg'
import Films from "../data/films.json";
import { useParams } from "react-router-dom"



export const FilmIntern = () => {
    const {id} = useParams()
    const result = Films.filter( (film) => parseInt(film.id) === parseInt(id));

    return (
        <>
            <NavBar />

            <section className="intern">
                <div className="container intern__container">
                    <img src={result[0].pictureUrl} alt="Interna" className="intern__img"/>
                    <div className="intern__info">
                        <h3 className="intern__info__title">
                            {result[0].title}
                        </h3>
                        <p className="intern__info__description">
                            {result[0].description}
                        </p>
                        <div className="intern__info__btn">
                            <button className="btn btn--tertiary">
                                <img src={StarIcon} alt="Star icon" />
                                Agregar a Favoritos
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}