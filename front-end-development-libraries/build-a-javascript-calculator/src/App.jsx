import { useState } from "react";
import Display from "./Components/Display";
import Keys from "./Components/Keys";

import Context from "./Context";

function App() {
  const [state, setState] = useState({
    formula: [],
    result: null,
  });

  return (
    <Context.Provider value={[state, setState]}>
      <div className="App">
        <div className="calculator">
          <Display />
          <Keys />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
