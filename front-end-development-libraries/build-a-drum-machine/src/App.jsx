import { createContext, useState } from "react";

import Drums from "./Components/Drums";
import Controls from "./Components/Controls";
import Context from "./Context";

export default function App() {
  const [state, setState] = useState({
    power: true,
    bank: false,
    volume: 0.2,
    displayContent: "",
  });

  return (
    <Context.Provider value={[state, setState]}>
      <div className="App">
        <div id="drum-machine">
          <Drums />
          <Controls />
        </div>
      </div>
    </Context.Provider>
  );
}
