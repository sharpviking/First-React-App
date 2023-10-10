import "./App.css";
// import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";

function App() {
  return (
    <div>
      <Greeter person="Bill" from="Colt!" />
      <Greeter person="Batman" from="Doga!" />
      <Greeter person="Kalia" from="Dhruv!" />
      <Die numSides={20} />
      <Die numSides={11} />
      <Die numSides={26} />
    </div>
  );
}

export default App;
