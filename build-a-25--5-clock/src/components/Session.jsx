import { ArrowUp, ArrowDown } from "lucide-react";
import Context from "../Context";
import { useContext } from "react";

export default function Session() {
  const [state, setState] = useContext(Context);

  function handleDecrement() {
    if (state.isPaused && state.sessionLength > 1) {
      setState((prev) => {
        return { ...prev, sessionLength: prev.sessionLength - 1 };
      });
    }
  }

  function handleIncrement() {
    if (state.isPaused && state.sessionLength < 60) {
      setState((prev) => {
        return { ...prev, sessionLength: prev.sessionLength + 1 };
      });
    }
  }
  return (
    <div className="Session">
      <div id="session-label">Session Length</div>
      <div className="session-controls">
        <ArrowDown
          size={32}
          strokeWidth={3}
          id="session-decrement"
          onClick={handleDecrement}
        />
        <strong id="session-length">{state.sessionLength}</strong>
        <ArrowUp
          size={32}
          strokeWidth={3}
          id="session-increment"
          onClick={handleIncrement}
        />
      </div>
    </div>
  );
}