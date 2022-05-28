import { useState } from "react";

export const useCounter = (initialState = 1) => {
    const [counter, setState] = useState(initialState);

    const operate = num => setState(state+num);
    const reset = () => setState(initialState);

    const increment = (factor=1) => operate(factor);
    const decrement = (factor=1) => operate(-1*factor);

    return {counter, increment, decrement, operate, reset};
}