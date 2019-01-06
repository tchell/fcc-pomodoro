import {DECREMENT, INCREMENT, NEW_TIMER, PAUSE, REFRESH, RESET, START} from "../actions/types";
import {initialState} from "../store";

const rootReducer = function(state, action) {
    switch(action.type) {
        case START:
            return {
                ...state,
                running: true,
                timeLeft: (state.type === 'session' ? state.session : state.break) + ":00",
            };
        case PAUSE:
            return {
                ...state,
                running: false,
            };
        case REFRESH:
            return {
                ...state,
                timeLeft: count_down(state.timeLeft),
            };
        case NEW_TIMER:
            return {
                ...state,
                timeLeft: (state.type === 'session' ? state.break : state.session) + ":00",
                type: (state.type === 'session' ? 'break' : 'session'),
            };
        case RESET:
            return {
                ...state,
                break: initialState.break,
                session: initialState.session,
                timeLeft: initialState.timeLeft,
                running: initialState.running,
                type: initialState.type,
            };
        case INCREMENT:
            if (action.payload === 'session') {
                return {
                    ...state,
                    session: increment(state.session),
                }
            } else if (action.payload === 'break') {
                return {
                    ...state,
                    break: increment(state.break),
                }
            } else {
                return state
            }
        case DECREMENT:
            if (action.payload === 'session') {
                return {
                    ...state,
                    session: decrement(state.session)
                }
            } else if (action.payload === 'break') {
                return {
                    ...state,
                    break: decrement(state.break)
                }
            } else {
                return state
            }
        default:
            return state
    }
};

function count_down(timeStr) {
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

function increment(old) {
    if (60 > old)
        return old + 1;
    else
        return 60;
}

function decrement(old) {
    if (old > 1)
        return old - 1;
    else
        return 1
}
export default rootReducer;