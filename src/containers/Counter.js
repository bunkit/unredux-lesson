import React from "react";

import "./Counter.css";
import { useStore } from "../hook/store";

const Counter = (props) => {
    const { globalState, dispatch } = useStore();
    return (
        <div className="counter">
            <p>
                Only there to proof, that you can have multiple globalState
                slices.
            </p>
            <p>Counter: {globalState.counter}</p>
            <button onClick={() => dispatch("ADD", 1)}>Add 1</button>
            <button onClick={() => dispatch("ADD", 5)}>Add 5</button>
            <button onClick={() => dispatch("SUB", 1)}>Subtract 1</button>
            <button onClick={() => dispatch("SUB", 5)}>Subtract 5</button>
        </div>
    );
};

export default Counter;
