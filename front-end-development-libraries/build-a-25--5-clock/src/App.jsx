import { useEffect, useRef, useState } from "react";
import Controls from "./components/Controls";
import Progress from "./components/Progress";
import Break from "./components/Break";
import Session from "./components/Session";
import Context from "./Context";
import { Clock } from "lucide-react";

function App() {
  const [state, setState] = useState({
    breakLength: 5,
    sessionLength: 25,
    currentTime: 25 * 60,
    isPaused: true,
    isSession: true,
  });

  const audioRef = useRef();
  const intervalRef = useRef();

  useEffect(() => {
    if (!state.isPaused) {
      intervalRef.current = setInterval(decrementCurrentTime, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [state.isPaused]);

  function decrementCurrentTime() {
    setState((prev) => {
      if (prev.currentTime > 0) {
        return {
          ...prev,
          currentTime: prev.currentTime - 1,
        };
      } else {
        timeOver();
        return prev;
      }
    });
  }

  function timeOver() {
    audioRef.current.play();

    setState((prev) => {
      return {
        ...prev,
        isSession: !prev.isSession,
        currentTime: prev.isSession
          ? prev.breakLength * 60
          : prev.sessionLength * 60,
      };
    });
  }

  useEffect(() => {
    setState((prev) => {
      return {
        ...prev,
        currentTime: prev.isSession
          ? prev.sessionLength * 60
          : prev.breakLength * 60,
      };
    });
  }, [state.breakLength, state.sessionLength]);

  return (
    <Context.Provider value={[state, setState]}>
      <div className="App">
        <h1>
          25 + 5 Cl
          <Clock size={28} strokeWidth={3} />
          ck
        </h1>

        <div className="break_session">
          <Break />
          <Session />
        </div>

        <Progress />

        <Controls />

        <audio
          id="beep"
          ref={audioRef}
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
          preload="auto"
        />
      </div>
    </Context.Provider>
  );
}

export default App;
