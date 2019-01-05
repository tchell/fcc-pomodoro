import {NEW_TIMER, PAUSE, REFRESH, RESET, START} from "../actions/types";


const initialState = {
    break: '5:00',
    session: '0:05',
    timeLeft: '0:05',
    running: false,
    type: 'session',
};

const rootReducer = function(state, action) {
    switch(action.type) {
        case START:
            return {
                ...state,
                running: true,
            };
        case PAUSE:
            return {
                ...state,
                running: false,
            };
        case REFRESH:
            return {
                ...state,
                timeLeft: decrement(state.timeLeft),
            };
        case NEW_TIMER:
            return {
                ...state,
                timeLeft: (state.type === 'session' ? state.break : state.session),
                type: (state.type === 'session' ? 'break' : 'session'),
            };
        case RESET:
            return {
                ...state,
                break: '5:00',
                session: '25:00',
                timeLeft: '25:00',
                running: false,
            };
        default:
            return state
    }
};

function decrement(timeStr) {
    let timeArr, min, sec;
    timeArr = timeStr.split(':');
    sec = parseInt(timeArr[1]);
    min = parseInt(timeArr[0]);
    if (sec >= 1) {
        sec--;
    } else if (min >= 1) {
        sec = 59;
        min--;
    }
    return String((min > 9 ? min : '0' + min)) + ':' + String((sec > 9 ? sec : '0' + sec));
}

export default rootReducer;