export default function Counter({ num }) {
  const increamentNum = () => {
    num += 1;
    console.log(num);
  };
  return (
    <div>
      <p>The count is:{num}</p>
      <button onClick={increamentNum}>increment</button>
    </div>
  );
}
