import { Switch, Route } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import MainNavigation from "./componetns/layout/MainNavigation";
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
    <div>
      <MainNavigation />
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
  );
}

export default App;
