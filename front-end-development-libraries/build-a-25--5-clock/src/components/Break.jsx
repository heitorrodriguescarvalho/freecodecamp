import { ArrowUp, ArrowDown } from "lucide-react";
import Context from "../Context";
import { useContext } from "react";

export default function Break() {
  const [state, setState] = useContext(Context);

  function handleDecrement() {
    if (state.isPaused && state.breakLength > 1) {
      setState((prev) => {
        return { ...prev, breakLength: prev.breakLength - 1 };
      });
    }
  }

  function handleIncrement() {
    if (state.isPaused && state.breakLength < 60) {
      setState((prev) => {
        return { ...prev, breakLength: prev.breakLength + 1 };
      });
    }
  }

  return (
    <div className="Break">
      <div id="break-label">Break Length</div>
      <div className="break-controls">
        <ArrowDown
          size={32}
          strokeWidth={3}
          id="break-decrement"
          onClick={handleDecrement}
        />
        <strong id="break-length">{state.breakLength}</strong>
        <ArrowUp
          size={32}
          strokeWidth={3}
          id="break-increment"
          onClick={handleIncrement}
        />
      </div>
    </div>
  );
}