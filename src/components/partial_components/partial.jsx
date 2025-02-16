import React from "react";

export const PartialComponent = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "16px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

export const RedButton = PartialComponent(Button, { color: "crimson" });
export const SmallRedButton = PartialComponent(RedButton, { size: "small" });
