import React from "react";

const Header = ({ children }) => {
  return (
    <div
      style={{
        borderBottom: "1px solid black",
        padding: ".5rem",
        marginBottom: ".5rem",
      }}
    >
      {children}
    </div>
  );
};

const Body = ({ children }) => {
  return <div style={{ padding: ".5rem" }}>{children}</div>;
};

const Footer = ({ children }) => {
  return (
    <div
      style={{
        borderTop: "1px solid black",
        padding: ".5rem",
        marginTop: ".5rem",
      }}
    >
      {children}
    </div>
  );
};

const CompoundCard = ({ header, footer, children }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      {header && <Header>{header}</Header>}
      {children && <Body>{children}</Body>}
      {footer && <Footer>{footer}</Footer>}
    </div>
  );
};

export default CompoundCard;

CompoundCard.Header = Header;
CompoundCard.Body = Body;
CompoundCard.Footer = Footer;
