import { useContext } from "react";
import Context from "../Context";

export default function Progress() {
  const [state, setState] = useContext(Context);
  const progressDegree = state.isSession
    ? (360 - (state.currentTime / (state.sessionLength * 60)) * 360).toFixed(2)
    : (360 - (state.currentTime / (state.breakLength * 60)) * 360).toFixed(2);

  const minutes = Math.floor(state.currentTime / 60)
  const seconds = state.currentTime % 60

  const progressTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
  return (
    <div
      className="Progress"
      style={{
        background: `conic-gradient(var(--title-color) ${progressDegree}deg, var(--text-color) 0deg)`,
      }}
    >
      <div className="content">
        <div id="time-left">{progressTime}</div>
        <div id="timer-label">{state.isSession ? "Session" : "Break"}</div>
      </div>
    </div>
  );
}
