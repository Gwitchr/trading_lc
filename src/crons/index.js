import {CronJob} from 'cron';
import {cryptoApiCtrl} from '../controllers';

export const getMain = async(socket)=> {
  // console.log('Before job instantiation');
  const job = new CronJob('*/5 * * * * *', async()=> {
     // cryptoApiCtrl.getCryptoData()
     const val = await cryptoApiCtrl.getCryptoData()
     // val.Data.Data.map(({time})=>console.log(new Date(time)))
     socket.emit('message',val.Data)
  });
  // console.log('After job instantiation');
  job.start();
}
