import "./App.css";
import Circle from "./components/Circle";
import Button from "./components/Button";

import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="App">
      <Circle count={count} />
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
