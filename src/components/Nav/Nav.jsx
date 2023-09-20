import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"
import styles from '../Nav/nav.module.css';

function random(){
    return parseInt(Math.random() * (826 - 1) + 1);
}

export default function Nav({onSearch}){
    return(
        <>
            <nav className={styles.navContainer}>
                    <ul>
                        <li className={styles.logo}>RICK AND MORTY APP</li>
                        <li><Link to={'/home'}><button>Home</button></Link></li>
                        <li><Link to={'/about'}><button>About</button></Link></li>
                        <li><Link to={'/favorites'}><button>Favorites</button></Link></li>
                        <li><button onClick={() => onSearch(random())}>Random</button></li>
                        <li><SearchBar onSearch={onSearch} /></li>
                    </ul>
            </nav>
        </>
    );
}