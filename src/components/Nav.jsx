import SearchBar from "./SearchBar";

function random(){
    return parseInt(Math.random() * (826 - 1) + 1);
}

export default function Nav({onSearch}){
    return(
        <>
            <SearchBar onSearch={onSearch} />
            <button onClick={() => onSearch(random())}>Random</button>
        </>
    );
}