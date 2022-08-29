import "./App.css";
import Circle from "./components/Circle";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Circle />
      <div className="buttons">
        <Button>-5</Button>
        <Button>-1</Button>
        <Button>Reset</Button>
        <Button>+1</Button>
        <Button>+5</Button>
      </div>
    </div>
  );
}

export default App;
