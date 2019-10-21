import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import {TradingTable} from '../components/elements';
import {start_connection} from '../redux/actions/socketio-actions';

const TradingTableCont =(props)=>{
  const {start_connection,...rest} = props
  useEffect(()=>{
    start_connection()
    //eslint-disable-next-line
  },[])
  return(
    <TradingTable {...rest}/>
  )
}

export default connect(({socketioReducer})=>({
  ...socketioReducer
}),{
  start_connection
})(TradingTableCont)
