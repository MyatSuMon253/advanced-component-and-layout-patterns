import RecursiveComponent from "./components/recursive_components/recursive";
import { myNestedObject } from "./data/nestedObj";

const App = () => {
  return (
    <>
      <RecursiveComponent data={myNestedObject} />
    </>
  );
};

export default App;
