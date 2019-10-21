import dotenv from 'dotenv';
dotenv.config()

export const setHJson=(i,method,b)=>{
  i = {
    method,
    mode:'cors',
    headers:{
      "Content-Type":"application/json",
      // "token":USERKEY
      "Authorization":`Apikey ${process.env.CRYPTOCOMPARE_KEY}.`

    }
  }
  if(b)i.body=JSON.stringify(b)
  return i
}
