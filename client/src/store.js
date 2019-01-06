import {createStore} from "redux";
import rootReducer from './reducers';

export const initialState = {
    break: 5,
    session: 25,
    timeLeft: '25:00',
    running: false,
    type: "session",
};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
