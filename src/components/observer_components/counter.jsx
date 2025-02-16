import React, { useEffect, useState } from "react";
import { emitter } from "../../App";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onIncrement = () => {
      setCount((count) => count + 1);
    };
    const onDecrement = () => {
      setCount((count) => count - 1);
    };

    emitter.on("inc", onIncrement);
    emitter.on("desc", onDecrement);

    return () => {
      emitter.off("inc", onIncrement);
      emitter.off("desc", onDecrement);
    };
  }, []);

  return <div>#: {count}</div>;
};

export default Counter;
