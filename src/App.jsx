import axios from "axios";
import DataSource from "./components/container_components/DataSource";
import UserInfo from "./components/container_components/UserInfo";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const App = () => {
  const getData = () => {};
  return (
    <>
      <DataSource
        getData={() => getDataFromServer(`/users/2`)}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
    </>
  );
};

export default App;
