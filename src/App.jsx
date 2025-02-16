import ParentComponent from "./components/observer_components/parent";
import mitt from "mitt";

export const emitter = mitt();

const App = () => {

  return <ParentComponent />;
};

export default App;
