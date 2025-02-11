import CurrentUserLoader from "./components/container_components/CurrentUserLoader";
import UserInfo from "./components/container_components/UserInfo";

const App = () => {
  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
};

export default App;
