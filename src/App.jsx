import UserInfo from "./components/higher_order_components/user-info";

const App = () => {
  return (
    <>
      <UserInfo userId={1} />
      <UserInfo userId={2} />
      <UserInfo userId={3} />
    </>
  );
};

export default App;
