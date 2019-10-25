import React from 'react';
import {Jumbotron} from 'reactstrap';
import {TradingTableCont} from '../../containers';

const Landing =()=>{
  return (
    <>
      <Jumbotron>
        <h1 className="display-3">SocketIO c/5 seg</h1>
        <p className="lead">
          OHLCV Bitcoin to USDT
        </p>
        <hr className="my-2" />

      </Jumbotron>
      <TradingTableCont/>
    </>
  )
}

export default Landing
