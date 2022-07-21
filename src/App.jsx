import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Words from "../data/words.json"
import Puzzle from './components/Puzzle'




function App() {
  let randomIndex=Math.floor(Math.random()* Words.length)
  let randomWord=Words[randomIndex]

  return (
    <div className="App">
      <Puzzle word={randomWord}/>
      {/* <GuessedLetters /> */}
    </div>
  )
}

export default App
