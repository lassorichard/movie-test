import { NavBar } from '../components/navBar'
import StarIcon from '../img/star.svg'
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from "axios";



export const FilmIntern = () => {
    const {id} = useParams()
    const [filmsId, setFilmsId] = useState([]);

    useEffect(()=> {
        getFilms()
        function getFilms(){
            axios.get('../films.json')
            .then(result => {
                const resultData = result.data
                resultData.filter((data) => {
                    if (data.id === parseInt(id)) {
                        return setFilmsId(data)
                    }
                    return null
                })
            }).catch(console.log)
        }
    }, [id])

    return (
        <>
            <NavBar />
            <section className="intern">
                <div className="container intern__container">
                    <img src={filmsId.pictureUrl} alt="Interna" className="intern__img"/>
                    <div className="intern__info">
                        <h3 className="intern__info__title">
                            {filmsId.title}
                        </h3>
                        <p className="intern__info__description">
                            {filmsId.description}
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