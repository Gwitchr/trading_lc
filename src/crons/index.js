import {CronJob} from 'cron';
import {cryptoApiCtrl} from '../controllers';
import {cryptoDataCtrl} from '../controllers';

export const getMainSocket = async(socket)=> {
  // console.log('Before job instantiation');
  const job = new CronJob('*/30 * * * * *', async()=> {
     // cryptoApiCtrl.getCryptoData()
     const val = await cryptoApiCtrl.getCryptoData()
     // val.Data.Data.map(({time})=>console.log(new Date(time)))
     // console.log(val)
     socket.emit('message',val)
  });
  // console.log('After job instantiation');
  job.start();
}
export const getMain = async()=> {
  console.log('Before job instantiation');
  const job = new CronJob('0 */1 * * * *', async()=> {
     // cryptoApiCtrl.getCryptoData()

     const val = await cryptoApiCtrl.getCryptoData()
     const added = cryptoDataCtrl.addOneCron(val[0])
     console.log('data',new Date().toLocaleString(),val[0])
  });
  console.log('After job instantiation');
  job.start();
}
