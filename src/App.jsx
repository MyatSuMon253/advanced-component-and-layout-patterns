import includeUser from "./components/higher_order_components/include-user";
import UserInfo from "./components/higher_order_components/user-info";

const UserInfoWithLoader = includeUser(UserInfo, 3);

const App = () => {
  return (
    <div>
      <UserInfoWithLoader />
    </div>
  );
};

export default App;
