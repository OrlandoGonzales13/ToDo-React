import './TodoSearch.css'

function TodoSearch() {
    return (
        <>
            <div className='container-search'>
                <input className='searchInput' placeholder="Filtrar ToDo"></input>
            </div>
        </>
    );
}

export { TodoSearch }