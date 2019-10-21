import {
  take,
  put,
  call,
  fork
} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import * as socketioActions from '../redux/actions/socketio-actions';
import {socketio} from '../services';

// function* startConnection(){
//   try {
//     const started = yield call(socketio.connect)
//     yield put(socketioActions.set_connection(started.connected))
//   } catch (e) {
//
//   }
// }


function subscribe(socket) {
  return new eventChannel(emitter => {
    const update = data => {
      console.log("listened data",data);
      return  emitter(socketioActions.set_data(data));
    }
    console.log("socket listening on get-todos");
    socket.on('message', update)
    return () => {}
  })
}

function* read(socket) {
  const channel = yield call(subscribe, socket);
  while (true) {
    let action = yield take(channel);
    // console.log("action",action);
    yield put(action);
  }
}

// function* write(socket) {
//
//   while (true) {
//
//     const {todo} = yield take(socketioActions.received_message)
//     console.log("saga title",todo);
//     socket.emit('insert-todo', todo)
//   }
// }


export function* socketioWatcher(){
  yield take(socketioActions.start_connection)
  const socket = yield call(socketio.connect)
  yield fork(read, socket)
  // yield fork(write, socket)
}
