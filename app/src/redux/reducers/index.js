import { combineReducers } from 'redux';

// import {userReducer} from './user-reducer';
import {socketioReducer} from './socketio-reducer';


const rootReducer = () => combineReducers({
    // userReducer,
    socketioReducer
});


export default rootReducer;
