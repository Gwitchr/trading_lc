export const START_CONNECTION = "START_CONNECTION"
export const SET_CONNECTION = "SET_CONNECTION"
export const RECEIVED_MESSAGE = "RECEIVED_MESSAGE"
export const SET_DATA = "SET_DATA"

export const start_connection=()=>({
  type:START_CONNECTION
})

export const set_connection=(connected)=>({
  type:SET_CONNECTION,
  connected
})

export const received_message=()=>({
  type:RECEIVED_MESSAGE
})

export const set_data=(data)=>({
  type:SET_DATA,
  data
})
