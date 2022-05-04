// Stretch goal component, to add filter to user selection - not working at the moment
import { useState } from 'react'

const BoardGameForm = (props) => {
    const [userChoice, setUserChoice] = useState('placeholder')

    const handleUserChoice = (e) => {
        console.log(parseInt(e.target.value))
        // update the userChoice
        setUserChoice(parseInt(e.target.value))
    }
    return (
        <form onSubmit={(e) => props.getBoardGame(e, userChoice)}>
            <h2>Show me some more boardgame recommendations</h2>
            <select 
                id="numberOfPlayers"
                name="numberOfPlayers"
                onChange={handleUserChoice}
                value = {userChoice}
            >
                <option value="placeholder" disabled>Pick a # of players:</option>
                {/* <option value="1">1</option> */}
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                {/* <option value="6">6</option> */}
            </select>
            <button type="submit">Give me more selective boardgames!</button>
        </form>
    )
}

export default BoardGameForm