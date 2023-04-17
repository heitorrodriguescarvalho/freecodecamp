import { Play, Pause, RefreshCw } from "lucide-react";
import { useContext } from "react";
import Context from "../Context";

export default function Controls() {
  const [state, setState] = useContext(Context);

  function handleReset() {
    const audio = document.querySelector("#beep");
    audio.pause();
    audio.currentTime = 0;
    setState({
        breakLength: 5,
        sessionLength: 25,
        currentTime: 25 * 60,
        isPaused: true,
        isSession: true,
    });
  }
  return (
    <div className="Controls">
      <span
        id="start_stop"
        onClick={() =>
          setState((prev) => {
            return { ...prev, isPaused: !prev.isPaused };
          })
        }
      >
        {state.isPaused ? (
          <Play size={32} strokeWidth={3} />
        ) : (
          <Pause size={32} strokeWidth={3} />
        )}
      </span>

      <RefreshCw size={28} strokeWidth={3} id="reset" onClick={handleReset} />
    </div>
  );
}