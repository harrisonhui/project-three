// same as props.boardGame - used {} for destructuring
const DisplayBoardGame = ({boardGame}) => {
    return(
        <section>
            {/* <h2>Click the button again for another board game!</h2> */}
                {
                    boardGame.map(boardGame => {
                        return(
                            <div className="container" key={boardGame.id}>
                                <div className="imgContainer">
                                    <img src ={boardGame.images.small} alt = {boardGame.description}/>
                                </div>
                                <div className="info">
                                    <p><span>Name: </span>{boardGame.name}</p>
                                    <p><span>Players: </span> {boardGame.players}</p>
                                    <p><span>Playtime: </span> {boardGame.playtime} Min</p>
                                    <p><span>Price(in USD): </span> {boardGame.price}</p>
                                    <p><span>Year Published: </span> {boardGame.year_published}</p>
                                    <p><span>Rank: </span> {boardGame.rank}</p>
                                </div>
                            </div>
                        )
                    })
                }
        </section>
    )
}

export default DisplayBoardGame