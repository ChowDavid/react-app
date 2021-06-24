import { Link } from "react-router-dom";
import css from './MainNavigation.module.css';

function MainNavigation(){
    return (
        <header className={css.header}>
            <div className={css.logo}>React Neetups</div>
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
        </header>
            
    );

}

export default MainNavigation;