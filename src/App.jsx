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
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";

// const data = [
//   { id: 1, item: "eggs", quantity: 7, completed: false },
//   { id: 2, item: "milk", quantity: 1, completed: true },
//   { id: 3, item: "almonds", quantity: 2, completed: true },
//   { id: 4, item: "dates", quantity: 9, completed: false },
// ];

// const properties = [
//   { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
//   { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
//   { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
//   { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
//   { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
//   { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
// ];

function App() {
  return (
    <div>
      <Clicker />
      {/* <PropertyList properties={properties} /> */}
      {/* <ShoppingList items={data} /> */}
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
