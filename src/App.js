import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AllMeetupPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";

function App() {
  return (
      <div>
<Switch>

        <Route exact path="/">
          <AllMeetupPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorities">
          <FavoritesPage />
        </Route>
  </Switch>

      </div>
  );
}

export default App;
