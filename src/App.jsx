import { useState } from "react";
import "./App.css";
import { ControlledModal } from "./components/controlled-modal";

function App() {
  const [shouldDisplay, setShouldDisplay] = useState(false);

  return (
    <div>
      <ControlledModal
        shouldDisplay={shouldDisplay}
        close={() => setShouldDisplay(false)}
      >
        <h3>I am the body of the modal</h3>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? "Hide Modal" : "Display Modal"}
      </button>
    </div>
  );
}

export default App;
