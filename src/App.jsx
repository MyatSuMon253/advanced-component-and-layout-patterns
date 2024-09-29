import React from "react";
import logProps from "./components/higher_order_components/log-props";
import UserInfo from "./components/higher_order_components/user-info";

const UserInfoWrapper = logProps(UserInfo);

const App = () => {
  return (
    <div>
      <UserInfoWrapper name="John" age={30} />
    </div>
  );
};

export default App;
