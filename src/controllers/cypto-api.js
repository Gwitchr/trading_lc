import fetch from 'node-fetch';
import {setHJson} from '../utils';

export const getCryptoData = async()=>{
  try {
    const d = new Date();
    let init
    init = setHJson(init,'GET')
    const result = await fetch(`https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=GBP&limit=10`,init)
      .then(r=>r.json())
    return result
  } catch (e) {
    console.warn(e)
  }
}
