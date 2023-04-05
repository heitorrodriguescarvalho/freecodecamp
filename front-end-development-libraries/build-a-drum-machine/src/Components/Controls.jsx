import { useContext } from "react";
import Context from "../Context"

export default function Controls() {
  const [state, setState] = useContext(Context);

  return (
    <div className="Controls">
      <label htmlFor="power-input">Power</label>
      <div
        id="power-input"
        className="input-container"
        onClick={() => {
          setState({ ...state, power: !state.power });
        }}
      >
        <div
          className="input-content"
          style={{ float: state.power ? "right" : "left" }}
        ></div>
      </div>

      <div id="display">{state.displayContent}</div>

      <input
        type="range"
        name="volume"
        id="volume-slide"
        value={state.volume}
        onChange={(event) => setState({ ...state, volume: event.target.value })}
        min={0}
        max={1}
        step={0.01}
      />

      <label htmlFor="bank-input">Bank</label>
      <div
        id="bank-input"
        className="input-container"
        onClick={() => {
          setState({ ...state, bank: !state.bank });
        }}
      >
        <div
          className="input-content"
          style={{ float: state.bank ? "right" : "left" }}
        ></div>
      </div>
    </div>
  );
}
