import "./App.css";
import Counter from "./components/Counter";
import NumberGen from "./components/Generator";



function App() {
  return (
    <>
      <hr />
      <Counter />
      <hr />
      <div className="App">
      <NumberGen />
    </div>
    <hr />
    </>
  );
}

export default App;