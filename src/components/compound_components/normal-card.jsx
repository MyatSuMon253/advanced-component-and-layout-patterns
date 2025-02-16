import React from "react";

const NormalCard = ({ header, footer, children }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      {header && (
        <div
          style={{
            borderBottom: "1px solid black",
            padding: ".5rem",
            marginBottom: ".5rem",
          }}
        >
          {header}
        </div>
      )}
      <div style={{ padding: ".5rem" }}>{children}</div>
      {footer && (
        <div
          style={{
            borderTop: "1px solid black",
            padding: ".5rem",
            marginTop: ".5rem",
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
};

export default NormalCard;
