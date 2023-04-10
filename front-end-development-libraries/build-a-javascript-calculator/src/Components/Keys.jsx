import { useContext, useEffect } from "react";
import Context from "../Context";

export default function Keys() {
  const [state, setState] = useContext(Context);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  });

  function handleKeyDown(event) {
    const keyPressed = event.key.toLowerCase();
    const keys = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      ".",
      ",",
      "*",
      "/",
      "+",
      "-",
      "=",
      "c",
      "backspace",
      "enter"
    ];

    if (keys.includes(keyPressed)) {
      if (isNumber(keyPressed)) {
        addNumberToFormula(keyPressed);
      } else {
        switch (keyPressed) {
          case ".":
          case ",":
            addDotToFormula();
            break;

          case "*":
            addOperationToFormula("multiply");
            break;

          case "/":
            addOperationToFormula("divide");
            break;

          case "+":
            addOperationToFormula("add");
            break;

          case "-":
            addOperationToFormula("subtract");
            break;

          case "backspace":
          case "c":
            handleClear();
            break;

          case 'enter':
          case "=":
            handleCalculate();
            break;
        }
      }
    }
  }

  function handleClick(event) {
    const value = translateValue(event.target.id);

    if (isNumber(value)) {
      addNumberToFormula(value);
    } else if (isOperation(value)) {
      addOperationToFormula(value);
    } else if (value === "decimal") {
      addDotToFormula();
    }
  }

  function addNumberToFormula(value) {
    // Caso a fórmula esteja  ou esteja começando uma nova operação
    if (state.formula.length === 0 || state.result) {
      setState({ formula: [value], result: null });

      // Caso a fórmula não esteja vazia
    } else {
      // Caso o último valor da fórmula seja um número
      if (isNumber(state.formula[state.formula.length - 1])) {
        // Anula o último número caso ele seja somente um zero
        if (state.formula[state.formula.length - 1] === "0") {
          setState((prev) => {
            return { ...prev, formula: [...prev.formula.slice(0, -1), value] };
          });
        }

        // Funde o novo valor ao final do último número
        else {
          setState((prev) => {
            const arr = [...prev.formula];
            arr[arr.length - 1] = `${arr[arr.length - 1]}${value}`;
            return { ...prev, formula: [...arr] };
          });
        }

        // Caso o último valor da fórmula seja uma operação
      } else if (isOperation(state.formula[state.formula.length - 1])) {
        setState((prev) => {
          return { ...prev, formula: [...prev.formula, value] };
        });
      }
    }
  }

  function addOperationToFormula(value) {
    if (state.result) {
      setState((prev) => {
        return { formula: [prev.result], result: null };
      });
    }
    // Caso a fórmula esteja vazia
    if (state.formula.length === 0) {
      // Só pode ser aceito subtração como primeiro valor de fórmula
      if (value === "subtract") {
        setState((prev) => {
          return { ...prev, formula: ["subtract"] };
        });
      }

      // Caso a fórmula não esteja vazia
    } else {
      // Caso o último valor seja um número
      if (isNumber(state.formula[state.formula.length - 1])) {
        setState((prev) => {
          return { ...prev, formula: [...prev.formula, value] };
        });
      }

      // Caso o último valor da fórmula seja uma operação
      else if (isOperation(state.formula[state.formula.length - 1])) {
        // Caso o último valor da fórmula seja um sinal de negativo e o penúltimo seja uma operação
        if (
          state.formula[state.formula.length - 1] === "subtract" &&
          isOperation(state.formula[state.formula.length - 2])
        ) {
          setState((prev) => {
            return { ...prev, formula: [...prev.formula.slice(0, -2), value] };
          });
        }

        // Caso a fórmula seja formada apenas por um sinal de subtração
        else if (
          state.formula.length === 1 &&
          state.formula[0] === "subtract"
        ) {
        }

        // Caso o valor a ser adicionado seja subtração
        else if (value === "subtract") {
          setState((prev) => {
            return { ...prev, formula: [...prev.formula, value] };
          });
        } else {
          setState((prev) => {
            return { ...prev, formula: [...prev.formula.slice(0, -1), value] };
          });
        }
      }
    }
  }

  function addDotToFormula() {
    // Caso a fórmula esteja vazia
    if (state.formula.length === 0) {
      setState((prev) => {
        return { ...prev, formula: ["0."] };
      });
    }

    // Caso a fórmula não esteja vazia
    else {
      // Caso o último valor da fórmula seja um número
      if (isNumber(state.formula[state.formula.length - 1])) {
        if (!state.formula[state.formula.length - 1].includes(".")) {
          setState((prev) => {
            const arr = [...prev.formula];
            arr[arr.length - 1] = `${arr[arr.length - 1]}${"."}`;
            return { ...prev, formula: [...arr] };
          });
        }
      }

      // Caso o último valor de fórmula seja uma operação
      else if (isOperation(state.formula[state.formula.length - 1])) {
        setState((prev) => {
          return { ...prev, formula: [...prev.formula, "0."] };
        });
      }
    }
  }

  function handleCalculate() {
    // Caso a fórmula tenha terminado com duas operações
    if (
      isOperation(state.formula[state.formula.length - 1]) &&
      isOperation(state.formula[state.formula.length - 2])
    ) {
      setState((prev) => {
        return { ...prev, formula: [...prev.formula.slice(0, -2)] };
      });
    }

    // Caso a fórmula tenha terminado com uma operação
    else if (isOperation(state.formula[state.formula.length - 1])) {
      setState((prev) => {
        return { ...prev, formula: [...prev.formula.slice(0, -1)] };
      });
    }

    // Caso a fórmula tenha terminado com um número que tenha terminado com um ponto
    if (
      (state.formula[state.formula.length - 1] &&
        state.formula[state.formula.length - 1][
          state.formula[state.formula.length - 1].length - 1
        ] === ".") ||
      (state.formula[state.formula.length - 2] &&
        state.formula[state.formula.length - 2][
          state.formula[state.formula.length - 2].length - 1
        ] === ".") ||
      (state.formula[state.formula.length - 3] &&
        state.formula[state.formula.length - 3][
          state.formula[state.formula.length - 3].length - 1
        ] === ".")
    ) {
      setState((prev) => {
        const arr = [...prev.formula];
        arr[arr.length - 1] = arr[arr.length - 1].substring(
          0,
          arr[arr.length - 1].length - 1
        );
        return { ...prev, formula: [...arr] };
      });
    }

    let formulaCalc = [...state.formula];

    while (true) {
      let canBreak = true;

      for (const strIndex in formulaCalc) {
        const index = parseFloat(strIndex);
        if (formulaCalc[index] === "subtract") {
          if (isOperation(formulaCalc[index - 1])) {
            formulaCalc = [
              ...formulaCalc.slice(0, index),
              `-${formulaCalc[index + 1]}`,
              ...formulaCalc.slice(index + 2),
            ];
            canBreak = false;
            break;
          } else if (index == 0) {
            formulaCalc = [
              `-${formulaCalc[index + 1]}`,
              ...formulaCalc.slice(index + 2),
            ];
            canBreak = false;
            break;
          }
        }
      }
      if (canBreak) {
        break;
      }
    }

    // Algorítmo que faz o cálculo
    while (formulaCalc.includes("multiply") || formulaCalc.includes("divide")) {
      for (const index in formulaCalc) {
        if (formulaCalc[index] === "multiply") {
          formulaCalc = calculate(formulaCalc, parseFloat(index), "multiply");
          break;
        } else if (formulaCalc[index] === "divide") {
          formulaCalc = calculate(formulaCalc, parseFloat(index), "divide");
          break;
        }
      }
    }

    while (formulaCalc.includes("add") || formulaCalc.includes("subtract")) {
      for (const index in formulaCalc) {
        if (formulaCalc[index] === "add") {
          formulaCalc = calculate(formulaCalc, parseFloat(index), "add");
          break;
        } else if (formulaCalc[index] === "subtract") {
          formulaCalc = calculate(formulaCalc, parseFloat(index), "subtract");
          break;
        }
      }
    }

    setState((prev) => {
      return { ...prev, result: formulaCalc[0] };
    });
  }

  function calculate(formulaCalc, index, operation) {
    const n1 = parseFloat(formulaCalc[index - 1]);
    const n2 = parseFloat(formulaCalc[index + 1]);
    const result =
      operation === "multiply"
        ? n1 * n2
        : operation === "divide"
        ? n1 / n2
        : operation === "add"
        ? n1 + n2
        : operation === "subtract"
        ? n1 - n2
        : "Error";

    const newFormula = [
      ...formulaCalc.slice(0, index - 1 >= 0 ? index - 1 : 0),
      String(result),
      ...formulaCalc.slice(index + 2),
    ];
    return newFormula;
  }

  function handleClear() {
    setState({ formula: [], result: null });
  }

  function isNumber(value) {
    return !isNaN(value);
  }

  function isOperation(value) {
    const operations = ["add", "subtract", "multiply", "divide"];

    return operations.some((operation) => {
      return operation === value;
    });
  }

  function translateValue(value) {
    switch (value) {
      case "zero":
        return "0";
        break;

      case "one":
        return "1";
        break;

      case "two":
        return "2";
        break;

      case "three":
        return "3";
        break;

      case "four":
        return "4";
        break;

      case "five":
        return "5";
        break;

      case "six":
        return "6";
        break;

      case "seven":
        return "7";
        break;

      case "eight":
        return "8";
        break;

      case "nine":
        return "9";
        break;

      default:
        return value;
        break;
    }
  }

  return (
    <div className="Keys">
      <div className="key-rows">
        <div className="key-row">
          <div id="clear" className="key" onClick={handleClear}>
            AC
          </div>
          <div id="divide" className="key" onClick={handleClick}>
            &divide;
          </div>
        </div>
        <div className="key-row">
          <div id="seven" className="key" onClick={handleClick}>
            7
          </div>
          <div id="eight" className="key" onClick={handleClick}>
            8
          </div>
          <div id="nine" className="key" onClick={handleClick}>
            9
          </div>
        </div>
        <div className="key-row">
          <div id="four" className="key" onClick={handleClick}>
            4
          </div>
          <div id="five" className="key" onClick={handleClick}>
            5
          </div>
          <div id="six" className="key" onClick={handleClick}>
            6
          </div>
        </div>
        <div className="key-row">
          <div id="one" className="key" onClick={handleClick}>
            1
          </div>
          <div id="two" className="key" onClick={handleClick}>
            2
          </div>
          <div id="three" className="key" onClick={handleClick}>
            3
          </div>
        </div>
        <div className="key-row">
          <div id="zero" className="key" onClick={handleClick}>
            0
          </div>
          <div id="decimal" className="key" onClick={handleClick}>
            .
          </div>
        </div>
      </div>
      <div className="key-column">
        <div id="multiply" className="key" onClick={handleClick}>
          &times;
        </div>
        <div id="subtract" className="key" onClick={handleClick}>
          -
        </div>
        <div id="add" className="key" onClick={handleClick}>
          +
        </div>
        <div id="equals" className="key" onClick={handleCalculate}>
          =
        </div>
      </div>
    </div>
  );
}
