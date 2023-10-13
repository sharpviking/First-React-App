import "./App.css";
// import Chicken from "./Chicken";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";
import ShoppingList from "./ShoppingList";

const data = [
  { item: "eggs", quantity: 7, completed: false },
  { item: "milk", quantity: 1, completed: true },
  { item: "almonds", quantity: 2, completed: true },
  { item: "dates", quantity: 9, completed: false },
];

function App() {
  return (
    <div>
      <ShoppingList items={data} />
      {/* <Slots val1="🍍" val2="🍍" val3="🍍" />
      <Slots val1="🍍" val2="🌶️" val3="🍍" /> */}
      {/* <ColorList colors={["red", "yellow", "teal", "purple"]} />
      <ColorList colors={["olive", "orangered", "slategrey", "purple"]} />
      <Heading color="red" text="Welcome!" fontSize="21px" />
      <Heading color="teal" text="Happy world!" fontSize="23px" />
      <Greeter />
      <Greeter person="Batman" from="Doga!" />
      <Greeter person="Kalia" from="Dhruv!" />
      <Die numSides={20} />
      <Die />
      <Die numSides={26} />
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={[26, 11, 91]} />
      <ListPicker values={["a", "b", "c"]} />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}
    </div>
  );
}

export default App;
