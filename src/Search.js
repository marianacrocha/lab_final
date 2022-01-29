import './App.css';
import React from "react";


function Search(searchQuery, setSearchQuery) {
    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">Pesquisa por uma cidade...</span>
            </label>
            <input
                value={searchQuery}
                onInput={e => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Pesquisa por uma cidade..."
                name="s"
            />
            <button type="submit">Search</button>
        </form>
    );
}



export default Search;