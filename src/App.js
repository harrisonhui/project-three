import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  // BoardGameAtlas API Call
  useEffect(() => {
    axios({
      url: "https://api.boardgameatlas.com/api/search",
      method: "GET",
      dataResponse: "json",
      params: {
        client_id:"rBjCQriFC6"
      }
    }).then((response) => {
      console.log(response.data.games)
    })
  }, [])

  return (
    <div className="App">
      <h1>placeholder boardgame header</h1>
    </div>
  );
}


export default App;


// Pseudo Code
// MVP
// Make API call to get list of board games (from BoardGameAtlas api)
// There will be a button for users to click on located in the center of the page
// Add event listener (onClick") on the button that will trigger a response when user interacts with the element
// Dynamically add 6 random board games on the page; with information and images displayed for each board game (E.g. Codenames, price, rating, # of players, etc...)

// Stretch goal #1
// Create new section that will contain radio buttons that will contain the # of player option (kind of like a filter)
// Add event listener for the # of players the user would like in their board game
// Display board games that match selected # of players (E.g. if 4 is chosen, any board games that can be played with 4 or more players will be randomly displayed)
// Dynamically add board game information while respecting the # of player filter chosen by the user

// Stretch goal #2
// Create a drop down menu that filters games based on category (E.g. Party Game)
// When an option is selected, filter options only with the user selected information while keeping the # of players filter option stored as well
// Dynamically add board game info to the page while respecting all conditions set by the user