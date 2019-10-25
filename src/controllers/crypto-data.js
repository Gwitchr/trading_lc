import {BinanHisto} from '../models';
import * as Sentry from '@sentry/node'

Sentry.init({ dsn: 'https://606e6d958f054e248a28f64b2c656a4c@sentry.io/1796835' });

export const addOneCron = async(body)=>{
  try {
    const entry = {
      openTime:body[0],
      open:body[1],
      high:body[2],
      low:body[3],
      close:body[4],
      volume:body[5],
      closeTime:body[6],
      quoteAssetVol:body[7],
      numberTrades:body[8],
      takerBuyBase:body[9],
      takerBuyQuote:body[10],
      ignore:body[11]
    }
    let newEntry = await new BinanHisto(entry).save()
    return newEntry
  } catch (e) {
    Sentry.captureException(e)
  }
}
