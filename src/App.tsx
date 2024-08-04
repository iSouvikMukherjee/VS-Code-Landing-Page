import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { Main } from './components/custom-components/Main'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Main/>
      </ThemeProvider>
    </>
  )
}

export default App
