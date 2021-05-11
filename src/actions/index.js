export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const M_PLUS = "M_PLUS";
export const M_R = "M_R";
export const M_C = "M_C";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    console.log(operator);
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = (e) => {
    return({type:CLEAR_DISPLAY, payload:e});
}

export const mPlus = (e) => {
    return({type:M_PLUS, payload:e});
}

export const mR = (e) => {
    return({type:M_R, payload:e});
}

export const mC = (e) => {
    return({type:M_C, payload:e});
}