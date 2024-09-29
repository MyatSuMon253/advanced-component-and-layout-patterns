import React from "react";

const UncontrolledFlow = ({ children, onFinish }) => {
  const [data, setData] = React.useState(0);
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);

  const goNext = () => {
    setCurrentStepIndex(currentStepIndex + 1);
  };
  
  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }
};

export default UncontrolledFlow;
