import React, {useState} from 'react';
import "./MoodClicker.css"
import Counter from "./Counter";
import useToggleState from './hooks/useToggleState';
import ColorPicker from "./ColorPicker";
import Signup from "./Signup";
import DogDetail from "./DogDetail";

const MoodClicker = () => {
  const [isHappy, toggleIsHappy] = useToggleState(true);
  const [isDarkMode, toggleIsDarkMode] = useToggleState(false)
  return (
    <div className={isDarkMode ? "clicker-dark" : "clicker-light"}>
      <h1>MOOD</h1>
      <h3>{isHappy ? "Happy" : "Sad"}</h3>
      <button onClick={toggleIsHappy}>Change Mood</button>
      <button onClick={toggleIsDarkMode}>Change Dark/Light Mode</button>
      <Counter />
      <Signup />
      <DogDetail />
    </div>
  )
}

export default MoodClicker;
