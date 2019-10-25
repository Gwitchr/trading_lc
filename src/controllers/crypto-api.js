import fetch from 'node-fetch';
import {setHJson} from '../utils';
import {binance} from '../constants'

export const getCryptoData = async()=>{
  const string = binance
  try {
    const d = new Date();
    let init
    init = setHJson(init,'GET')
    const result = await fetch(string,init)
    .then(r=>r.json())
    return result
  } catch (e) {
    console.warn(e)
  }
}
