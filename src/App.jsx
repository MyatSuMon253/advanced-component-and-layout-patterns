import "./App.css";
import UncontrolledFlow from "./components/uncontrolled-flow";

const StepOne = ({ goNext }) => (
  <>
    <h1>Step #1 Enter your name:</h1>
    <button onClick={() => goNext({ name: "My Name" })}>Next</button>
  </>
);

const StepTwo = ({ goNext }) => (
  <>
    <h1>Step #2 Enter your age</h1>
    <button onClick={() => goNext({ age: 23 })}>Next</button>
  </>
);

const StepThree = ({ goNext }) => (
  <>
    <h1>Step #3 Enter your country</h1>
    <button onClick={() => goNext({ country: "myanmar" })}>Next</button>
  </>
);

function App() {
  return (
    <UncontrolledFlow
      onFinish={(data) => {
        console.log(data), alert("Yeahhh, you made it to the final step!");
      }}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledFlow>
  );
}

export default App;
