import Slider from "react-slick";
import Hero from '../img/hero-1.png'

const picture = Hero

    const heroes = [
        {   
            id: 1,
            picture: picture,
            description: 'Programa tu fin de semana con Movies escoge tus peliculas favorítas'
        },
        {
            id: 2,
            picture: picture,
            description: 'Fin de semana con Movies'
        },
    ]


export const HeroSlider = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1
      };

    return (
        <>
            <div>
                <Slider {...settings}>
                    {heroes.map( (hero) => {

                        return(
                            <figure key={hero.id} className="heroSlider">
                                <img className="heroSlider__img" src={hero.picture} alt="" />
                                <div className="heroSlider__overlay"></div>
                                <figcaption className="heroSlider__description">
                                    <span>
                                        {hero.description}
                                    </span>
                                </figcaption>
                            </figure>
                        )
                    })}
                </Slider>
                
            </div>
        </>
    )
}