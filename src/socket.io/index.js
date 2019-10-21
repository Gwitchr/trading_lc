import socket_io from 'socket.io';
import {socketCtrl} from '../controllers'
const io = socket_io()

io.on('connection',socketCtrl.main)


const socketAPI = {
  io
}
module.exports = socketAPI
