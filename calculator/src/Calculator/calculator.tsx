import { useState } from "react";
import "./calculator.css";

function Calculator() {

    const calcSymbols = ["C", "1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "/", ".", "="];

    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (value: string): void => {
        if (value === "=") {
            setInputValue(eval(inputValue))
        } else if (value === "C") {
            setInputValue("");
        } else {
            setInputValue(value.concat(inputValue));
        }
    }

    return (
        <div className="parent">
            <input className="div1 border"
                type="text"
                value={inputValue}
            ></input>
            {calcSymbols.map((value, index) => (
                <div className={`div${index + 2} border button`}
                    key={index} onClick={() => handleInputValue(value)}
                >
                    {value}
                </div>
            ))}
        </div>
    )
}

export default Calculator;