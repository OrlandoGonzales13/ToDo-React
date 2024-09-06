import './TodoCounter.css'

function TodoCounter({ total, completed }) {
    return (
        <>
            <section className="todoCounter">
                <div className='container'>
                    <h1 className='.title'>
                        Has completado <span className='titleReactive'>{completed}</span> de <span className='titleReactive'>{total}</span> ToDos.
                    </h1>
                </div>
            </section>
        </>
    );
}

export { TodoCounter }