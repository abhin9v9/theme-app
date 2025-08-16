import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext";


function App() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: state.theme === "light" ? "#fff" : "#333",
        color: state.theme === "light" ? "#000" : "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1>{state.theme.toUpperCase()} MODE</h1>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME"})}>
        Toggle Theme
      </button>
    </div>
  )
}

export default App
