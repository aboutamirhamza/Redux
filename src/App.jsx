import Button from "./components/Button"
import MainSection from "./components/MainSection"
import { ThemeProvider } from "./context/ThemeContext"

function App() {

  return (
    <>
      <ThemeProvider>
        <Button />
        <MainSection />
      </ThemeProvider>
    </>
  )
}

export default App
