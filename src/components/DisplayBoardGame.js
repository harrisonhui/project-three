// same as props.boardGame - used {} for destructuring
const DisplayBoardGame = ({boardGame}) => {
    return(
        <section>
            <h2>Click the button again if you don't like this game!</h2>
            <p>Prices shown are in USD</p>
                {
                    boardGame.map(boardGame => {
                        return(
                            <div className="container" key={boardGame.id}>
                                <div className="imgContainer">
                                    <img src ={boardGame.images.small} alt = {boardGame.description}/>
                                </div>
                                <div className="info">
                                    <p>Name: {boardGame.name}</p>
                                    <p>Players: {boardGame.players}</p>
                                    <p>Playtime: {boardGame.playtime}</p>
                                    <p>Price: {boardGame.price}</p>
                                    <p>Year Published: {boardGame.year_published}</p>
                                    <p>Rank: {boardGame.rank}</p>
                                </div>
                            </div>
                        )
                    })
                }
        </section>
    )
}

export default DisplayBoardGame