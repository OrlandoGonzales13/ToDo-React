import './CreateTodoButton.css'

function CreateTodoButton(props) {
    return (
        <>
            <div className="container-button">
                <button onClick={
                    (event) => {
                        console.log('Le diste Click - ADD')
                        console.log(event)
                        console.log(event.target)

                    }
                }>
                    +
                </button>
            </div>
        </>
    );
}

export { CreateTodoButton }