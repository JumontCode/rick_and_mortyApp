import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import styles from '../componentStyles/nav.module.css';

function random(){
    return parseInt(Math.random() * (826 - 1) + 1);
}

export default function Nav({onSearch}){
    return(
        <>
            <nav className={styles.navContainer}>
                <SearchBar onSearch={onSearch} />
                <Link to={'/home'}><button>Home</button></Link>
                <Link to={'/about'}><button>About</button></Link>
                <Link to={'/favorites'}><button>Favorites</button></Link>
                <button onClick={() => onSearch(random())}>Random</button>
            </nav>
        </>
    );
}