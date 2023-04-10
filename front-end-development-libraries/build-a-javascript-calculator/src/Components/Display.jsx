import { useContext } from "react";
import Context from "../Context";

export default function Display() {
  const [state, setState] = useContext(Context);

  let formulaContent = "";
  for (let index in state.formula) {
    formulaContent += formatOperation(state.formula[index]);
  }
  if (state.result) {
    formulaContent += ` = ${state.result}`;
  }

  function formatOperation(operation) {
    return operation === "multiply"
      ? " × "
      : operation === "divide"
      ? " ÷ "
      : operation === "add"
      ? " + "
      : operation === "subtract"
      ? " - "
      : operation;
  }

  return (
    <div className="Display">
      <div className="formula">{formulaContent}</div>
      <div id="display">
        {state.result
          ? state.result
          : state.formula.length > 0
          ? formatOperation(state.formula[state.formula.length - 1])
          : "0"}
      </div>
    </div>
  );
}
