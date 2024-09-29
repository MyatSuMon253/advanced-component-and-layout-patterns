import React from "react";
import "./App.css";
import ControlledFlow from "./components/controlled_and_uncontrolled_components/controlled-flow";

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
    <h1>Congradulations! You qualify for the gift!</h1>
    <button onClick={() => goNext({ country: "myanmar" })}>Next</button>
  </>
);

const StepFour = ({ goNext }) => (
  <>
    <h1>Step #3 Enter your country</h1>
    <button onClick={() => goNext({ country: "myanmar" })}>Next</button>
  </>
);

function App() {
  const [data, setData] = React.useState({});
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);

  const onNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };

  return (
    <ControlledFlow currentStepIndex={currentStepIndex} onNext={onNext}>
      <StepOne />
      <StepTwo />
      {/* {data?.age > 25 ? <StepThree /> : <></>} */}
      <StepFour />
    </ControlledFlow>
  );
}

export default App;
