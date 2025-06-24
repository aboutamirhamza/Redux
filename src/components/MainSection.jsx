import React from 'react'
import { useTheme } from '../context/ThemeContext';

function MainSection() {
  const {darkMode} = useTheme();
  return (
    <h1>{darkMode ? "It's Dark Mode" : "It's Light Mode"}</h1>
  )
}

export default MainSection