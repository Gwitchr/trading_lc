import React from 'react';
import {Table} from 'reactstrap';
import {optDate} from '../../utils';

const TradingTable =({data:{Data:datos}})=>{
  return(
    <Table striped>
      <thead>
        {/* {Object.keys(datos[0]).map((el,i)=><th key={i}>
          {el}
        </th>)} */}
        <th>
          <b>time</b>
        </th>
        <th>
          <b>high</b>
        </th>
        <th>
          <b>low</b>
        </th>
        <th>
          <b>open</b>
        </th>
        <th>
          <b>close</b>
        </th>
        <th>
          <b>volume from</b>
        </th>
        <th>
          <b>volume to</b>
        </th>
      </thead>
      <tbody>
        {datos.map(({time,high,low,open,close,volumefrom,volumeto},i)=><tr key={i}>
          {/* {Object.keys(obj).map((key,i)=><td key={i}>
            {obj[key]}
          </td>)} */}
          <td>
            {new Date(time*1000).toLocaleString('es-MX',optDate)}
            {/* {new Date(time).toLocaleString('es-MX',optDate)} */}
            {/* {time} */}
          </td>
          <td>
            {high}
          </td>
          <td>
            {low}
          </td>
          <td>
            {open}
          </td>
          <td>
            {close}
          </td>
          <td>
            {volumefrom}
          </td>
          <td>
            {volumeto}
          </td>
        </tr>)}
      </tbody>

    </Table>
  )
}

export default TradingTable
