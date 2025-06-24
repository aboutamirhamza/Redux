import React from 'react'
import { useTheme } from '../context/ThemeContext';

function Button() {
    const {darkMode, toggleTheme} = useTheme();
  return (
    <div>
        <button onClick={toggleTheme}>Switch to {darkMode ? 'Light' : 'Dark'}</button>
    </div>
  )
}

export default Button