import ResourceLoader from "./components/container_components/ResourceLoader";
import UserInfo from "./components/container_components/UserInfo";

const App = () => {
  return (
    <>
      <ResourceLoader resourceUrl={`http://localhost:9090/users/2`} resourceName="user">
        <UserInfo />
      </ResourceLoader>
    </>
  );
};

export default App;
