import * as crons from '../crons';

export const main =async(socket)=>{
  console.log('new user')
  const val = await crons.getMain(socket)
  // const val = crons.getMain()
  // socket.emit('message',{data:val})
}
