import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';
import Button from './components/Button';
import DisplayBoardGame from './components/DisplayBoardGame';
// stretch goal imports - NOT COMPLETED TO THIS DATE DOES NOT WORK PROPERLY ALL CODE COMMENTED OUT
import BoardGameForm from './components/BoardGameForm';

function App() {
  // Step #2: create state to store board game data
  const [boardGame, setBoardGame] = useState([]);
  // const [activeGame, setActiveGame] = useState(false);

  // Step #1: BoardGameAtlas API Call
  const onClickHandler = () => {
    console.log("button click works")
    axios({
      url: "https://api.boardgameatlas.com/api/search",
      method: "GET",
      dataResponse: "json",
      params: {
          client_id:"rBjCQriFC6",
          random: true,
      }
      }).then((response) => {
          console.log(response.data.games)
          const responseData = response.data.games

          setBoardGame(responseData)
      })

    return <h2>Clck the button for another board game!</h2>
  }

  return (
    <div className="App">
      <h1>Random Board Game Generator</h1>
      <h3>Created using the Board Game Atlas API</h3>
      < Button clicked={onClickHandler} />
      < DisplayBoardGame boardGame={boardGame}/>
      <footer>Created at Juno College of Technology</footer>
    </div>
  );
}

  // Step 3 STRETCH GOAL: create new state to use when filtered option is clicked to display filtered results
  // const [displayBoardGame, setDisplayBoardGame] = useState([])

  // const getBoardGame = (e, player) => {
  //   e.preventDefault();
  //   console.log("test", player)
  //   const copyOfBoardGames = [...boardGame]
  //   const boardGamePlayers = copyOfBoardGames.filter(game => {
  //     return (game.min_players) === player
  //   })
  //   console.log(boardGamePlayers)
  //   // setDisplayBoardGame(boardGamePlayers)
  // }

export default App;
