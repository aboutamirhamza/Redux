import Button from "./components/Button"
import Counter from "./components/Counter"
import CounterActions from "./components/CounterActions"
import MainSection from "./components/MainSection"
import { ThemeProvider } from "./context/ThemeContext"

function App() {

  return (
    <>
      <ThemeProvider>
        <Button />
        <MainSection />
        <h1>--------------Redux--------------</h1>
        <Counter />
        <CounterActions />
      </ThemeProvider>
    </>
  )
}

export default App
