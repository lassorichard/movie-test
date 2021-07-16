import { NavBar } from '../components/navBar'
import Movie from '../img/movie.png'
import StarIcon from '../img/star.svg'

export const FilmIntern = () => {
    return (
        <>
            <NavBar />
            <section className="intern">
                <div className="container intern__container">
                    <img src={Movie} alt="Interna" className="intern__img"/>
                    <div className="intern__info">
                        <h3 className="intern__info__title">
                            Titulo
                        </h3>
                        <p className="intern__info__description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt repudiandae delectus, sint ex numquam non ad quod iusto inventore nesciunt voluptates provident. Aut, nostrum quod! Enim asperiores soluta hic corrupti!
                        </p>
                        <button className="btn btn--tertiary">
                            <img src={StarIcon} alt="Star icon" />
                            Agregar a Favoritos
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}