import axios from "axios";
import DataSource from "./components/container_components/DataSource";
import DataSourceWithRender from "./components/container_components/DataSourceWithRender";
import UserInfo from "./components/container_components/UserInfo";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

const App = () => {
  return (
    <>
      <DataSourceWithRender
        getData={() => getDataFromServer(`/users/2`)}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceWithRender>
      <DataSource
        getData={() => getDataFromLocalStorage(`new`)}
        resourceName="msg"
      >
        <Message />
      </DataSource>
    </>
  );
};

export default App;
