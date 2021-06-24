import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
/**
 * Router can be place inside index.js
 * Switch stop the select down.
 * But '/' would almost the widecard so that we add exact
 * 
 * @returns Router can be place in index.js
 * 
 */
function App() {
  return (
      <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/hello'>Hello</Link>
                </li>
                <li>
                  <Link to='/help'>Help</Link>
                </li>
              </ul>
            </nav>
            <hr />
            <Switch>
            <Route exact path="/">
                <AllMeetupPage />
              </Route>
              <Route exact path="/hello">
                <NewMeetup />
              </Route>
              <Route exact path="/help">
                <FavoritesPage />
              </Route>
              
            </Switch>
          </div>
        </Router>
  );
}

export default App;
