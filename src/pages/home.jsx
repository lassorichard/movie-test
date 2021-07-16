import { NavBar } from '../components/navBar'
import { HeroSlider } from '../components/heroSlider'
import { FilmsLayout } from '../components/filmsLayout'

export const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSlider />
      <FilmsLayout />
    </>
  );
}
