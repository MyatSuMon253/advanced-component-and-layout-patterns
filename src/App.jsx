import { SplitScreen } from "./components/layout_components/split-screen";

const LeftSideComponent = () => {
  return <h2 style={{backgroundColor: 'red'}}>I'm Left</h2>;
};

const RightSideComponent = () => {
  return <h2 style={{backgroundColor: 'green'}}>I'm Right</h2>;
};

const App = () => {
  return <SplitScreen Left={LeftSideComponent} Right={RightSideComponent} />;
};

export default App;
