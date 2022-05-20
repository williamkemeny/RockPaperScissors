import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [bestOfFive, setBestOfFive] = useState(false);
  const [endMessage, setEndMessage] = useState("You Won!");
  const [playerAction, setPlayerAction] = useState("");
  const [computerAction, setComputerAction] = useState("");
  const [counter, setCounter] = useState(0);

  function getRandomAction() {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) {
      return "Rock";
    }
    if (x === 1) {
      return "Paper";
    }
    if (x === 2) {
      return "Scissors";
    }
  }

  const handleClick = () => {
    if (playerScore === 5 || computerScore === 5 || playerAction === "") {
      return;
    }
    setComputerAction(getRandomAction());
    setCounter(counter + 1);
  };

  useEffect(() => {
    if (playerScore === 5) {
      setBestOfFive(true);
      return setEndMessage("You Won!");
    }
    if (computerScore === 5) {
      setBestOfFive(true);
      return setEndMessage("You Lost!");
    }
  }, [playerScore, computerScore]);

  useEffect(() => {
    if (playerAction === "Rock" && computerAction === "Scissors") {
      setPlayerScore(playerScore + 1);
    }
    if (playerAction === "Paper" && computerAction === "Rock") {
      setPlayerScore(playerScore + 1);
    }
    if (playerAction === "Scissors" && computerAction === "Paper") {
      setPlayerScore(playerScore + 1);
    }
    if (computerAction === "Rock" && playerAction === "Scissors") {
      setComputerScore(computerScore + 1);
    }
    if (computerAction === "Paper" && playerAction === "Rock") {
      setComputerScore(computerScore + 1);
    }
    if (computerAction === "Scissors" && playerAction === "Paper") {
      setComputerScore(computerScore + 1);
    }
  }, [counter]);

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <h2>{bestOfFive ? endMessage : "Who Will Win?"}</h2>
      <h2 className="text-center">Score</h2>
      <div className="grid-container">
        <h3>Player Score: {playerScore} </h3>
        <h3>Computer Score: {computerScore}</h3>
      </div>
      <div className="RPS">
        <h2>The Computers Action: {computerAction}</h2>
        <button
          className="button"
          onClick={() => {
            setPlayerAction("Rock");
            handleClick();
          }}
        >
          Rock
        </button>
        <button
          className="button"
          onClick={() => {
            setPlayerAction("Paper");
            handleClick();
          }}
        >
          Paper
        </button>
        <button
          className="button"
          onClick={() => {
            setPlayerAction("Scissors");
            handleClick();
          }}
        >
          Scissors
        </button>
      </div>
      <button
        onClick={() => {
          setPlayerScore(0);
          setComputerScore(0);
          setBestOfFive(false);
          setCounter(0);
        }}
      >
        Play Again
      </button>
    </div>
  );
}

export default App;
