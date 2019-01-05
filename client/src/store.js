import {createStore} from "redux";
import rootReducer from './reducers';

const initialState = {
    break: '00:05',
    session: '00:10',
    timeLeft: '0:05',
    running: false,
    type: "session",
};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
