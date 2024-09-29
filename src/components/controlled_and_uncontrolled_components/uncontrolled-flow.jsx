import React from "react";

const UncontrolledFlow = ({ children, onFinish }) => {
  const [data, setData] = React.useState();
  const [currentStepIndex, setCurrentStepIndex] = React.useState(0);

  const goNext = (dataFromStep) => {
    const nextStepIndex = currentStepIndex + 1;
    const newData = {
      ...data,
      ...dataFromStep,
    };
    console.log(newData);

    if (nextStepIndex < children.length) {
      setCurrentStepIndex(nextStepIndex);
      return;
    } else {
      onFinish(newData);
    }
    setData(newData);
    setCurrentStepIndex(currentStepIndex + 1);
  };

  const currentChild = React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }
};

export default UncontrolledFlow;
