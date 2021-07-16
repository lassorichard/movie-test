import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Home } from './home';
import { Categories } from './categories';
import { MyFavorites } from './myFavorites';
import { FilmIntern } from '../components/filmIntern';

export const RoutePage = () => {
    return (
    <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/categories">
            <Categories />
          </Route>
          <Route  path="/my-favorites">
            <MyFavorites />
          </Route>
          <Route  exact path="/film/:id">
            <FilmIntern />
          </Route>

        </Switch>
    </Router>
    )
} 