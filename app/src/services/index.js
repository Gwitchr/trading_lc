import io from 'socket.io-client';
const socketServerURL = '/'

export const socketio = {
  connect(){
    const socket = io(socketServerURL);
    return new Promise((resolve) => {
      socket.on('connect', () => {
        resolve(socket);
      });
    });
  }
}
