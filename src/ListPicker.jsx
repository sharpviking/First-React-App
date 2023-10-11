export default function ListPicker({ values }) {
  const randomIndx = Math.floor(Math.random() * values.length);
  const randomElement = values[randomIndx];
  return (
    <div>
      <p>The list of: {values}</p>
      <p>Random element is: {randomElement}</p>
    </div>
  );
}
