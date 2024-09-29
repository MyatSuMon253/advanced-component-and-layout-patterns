import React from "react";

const ControlledFlow = ({ children, onFinish, currentIndex, onNext }) => {
  const goNext = (dataFromStep) => {
    onNext(dataFromStep)
  }
  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext });
  }
};

export default ControlledFlow;
