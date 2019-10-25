import {
  SET_CONNECTION,
  SET_DATA
} from '../actions/socketio-actions';

export const socketioReducer =(state={
  connected:false,
  // data:{Data:[{}]}
  data:[[null,null,null,null,null,null]]
},action)=>{
  const {
    type,
    connected,
    data
  } = action
  switch (type) {
    case SET_CONNECTION:
      return ({...state,connected})
    case SET_DATA:
      return ({...state,data})
    default:
      return ({...state})

  }
}
