import {DECREMENT, INCREMENT, NEW_TIMER, PAUSE, REFRESH, RESET, START} from "./types";

export const start = () => {
    return {
        type: START,
    }
};

export const refresh = () => {
    return {
        type: REFRESH,
    }
};

export const pause = () => {
    return {
        type: PAUSE,
    }
};

export const reset = () => {
    return {
        type: RESET,
    }
};

export const newTimer = () => {
    return {
        type: NEW_TIMER,
    }
};

export const increment = (type_str) => {
    return {
        type: INCREMENT,
        payload: type_str,
    }
};

export const decrement = (type_str) => {
    return {
        type: DECREMENT,
        payload: type_str,
    }
};
