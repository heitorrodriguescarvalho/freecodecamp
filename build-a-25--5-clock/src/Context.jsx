import { createContext } from "react";

const Context = createContext({
  breakLength: 5,
  sessionLength: 25,
  currentTime: 25 * 60,
  isPaused: true,
  isSession: true,
})

export default Context