import { createContext } from "react";

const Context = createContext({
    power: true,
    bank: false,
    volume: 0.2,
    displayContent: "",
  });

export default Context