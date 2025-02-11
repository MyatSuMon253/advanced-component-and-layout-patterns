import UserInfo from "./components/container_components/UserInfo";
import UserLoader from "./components/container_components/UserLoader";

const App = () => {
  return (
    <>
      <UserLoader userId={1}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={"2"}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId="3">
        <UserInfo />
      </UserLoader>
    </>
  );
};

export default App;
