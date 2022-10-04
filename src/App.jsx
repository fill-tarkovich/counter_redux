import "./App.css";
import Circle from "./components/Circle";
import Button from "./components/Button";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "./features/CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Circle count={count} />
      <div className="buttons">
        <Button>-5</Button>
        <Button onClick={() => dispatch(decrement())}>-1</Button>
        <Button onClick={() => dispatch(reset())}>Reset</Button>
        <Button onClick={() => dispatch(increment())}>+1</Button>
        <Button>+5</Button>
      </div>
    </div>
  );
}

export default App;
