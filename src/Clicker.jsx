function handleClick() {
  console.log("Clicked the button!");
}

function handleHover() {
  console.log("Hovered over Me!!!");
}
export default function Clicker() {
  return (
    <div>
      <p onMouseOver={handleHover}>Hover over Me</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
