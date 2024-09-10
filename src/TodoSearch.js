import React from 'react';
import './TodoSearch.css'

function TodoSearch({
    searchValue, setSearchValue
}) {


    return (
        <>
            <div className='container-search'>
                <input
                    className='searchInput'
                    placeholder="Filtrar ToDo"
                    value={searchValue}
                    onChange={(event) => {
                        // console.log('Escribiste en el ToDoSearch')
                        // console.log(event)
                        // console.log(event.target)
                        // console.log(event.target.value)
                        setSearchValue(event.target.value);
                    }}
                ></input>
            </div>
        </>
    );
}

export { TodoSearch }