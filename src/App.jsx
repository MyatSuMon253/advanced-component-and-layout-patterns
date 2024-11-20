import { UserInfoForm } from "./components/higher_order_components/user-form";
import UserInfo from "./components/higher_order_components/user-info";

const App = () => {
  return (
    <div>
      <UserInfo userId={"1"} />
    </div>
  );
};

export default App;
