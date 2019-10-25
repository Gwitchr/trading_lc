import mongoose from 'mongoose';
const Schema = mongoose.Schema

const BinanHistoSchema = new Schema({
  openTime:{
    type:Number
  },
  open:{
    type:String
  },
  high:{
    type:String
  },
  low:{
    type:String
  },
  close:{
    type:String
  },
  volume:{
    type:String
  },
  closeTime:{
    type:Number
  },
  quoteAssetVol:{
    type:String
  },
  numberTrades:{
    type:Number
  },
  takerBuyBase:{
    type:String
  },
  takerBuyQuote:{
    type:String
  },
  ignore:{
    type:String
  }
}, {

  versionKey: false,
  usePushEach: true,
  timestamps:true
})

export default mongoose.model('BinanHisto', BinanHistoSchema)
