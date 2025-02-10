import { SplitScreen } from "./components/layout_components/split-screen";

const LeftSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};

const App = () => {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComponent title="Left" />
      <RightSideComponent title="Right" />
    </SplitScreen>
  );
};

export default App;
