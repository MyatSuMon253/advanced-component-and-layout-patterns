import axios from "axios";
import DataSourceWithRender from "./components/container_components/DataSourceWithRender";
import UserInfo from "./components/container_components/UserInfo";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const App = () => {
  return (
    <>
      <DataSourceWithRender
        getData={() => getDataFromServer(`/users/2`)}
        render={(resource) => <UserInfo user={resource} />}
      ></DataSourceWithRender>
    </>
  );
};

export default App;
