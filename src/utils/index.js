import dotenv from 'dotenv';
dotenv.config()

export const setHJson=(i,method,b)=>{
  i = {
    method,
    mode:'cors',
    headers:{
      "Content-Type":"application/json",
      "X-MBX-APIKEY":process.env.BIN_KEY,
      // "secretKey":process.env.BIN_SC_KEY
      // "Authorization":`Apikey ${process.env.CRYPTOCOMPARE_KEY}.`

    }
  }
  if(b)i.body=JSON.stringify(b)
  return i
}
