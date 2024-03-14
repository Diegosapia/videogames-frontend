
import { Link } from "react-router-dom";
import style from './nav.module.css';
import SearchBar from '../SearchBar/searchbar.jsx';

const NavBar = () => {



    return (
        <div className={style.all}>
        <nav className={style.conteiner}>
        <div className={style.createcb}>
            <Link to="/create" className={style.create}>
            <button className={style.bcreate}> -Create Videogame- </button>
          </Link>
          <SearchBar />
        </div>
        </nav>
        </div>
    )
}

export default NavBar;