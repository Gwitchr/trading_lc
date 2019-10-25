import React from 'react';
import {
  Table,
  Container
} from 'reactstrap';
import {optDate} from '../../utils';
import '../../style/table.css'

const TradingTable =({data})=>{
  return(
    <Container>
      {/* {JSON.stringify(data)} */}
      <Table className="data_table" striped size="sm" responsive>
        <thead>
          <th>
            OpenTm
          </th>
          <th>
            Open
          </th>
          <th>
            High
          </th>
          <th>
            Low
          </th>
          <th>
            Close
          </th>
          <th>
            Volume
          </th>
          <th>
            CloseTm
          </th>
          <th>
            QAV
          </th>
          <th>
            NoT
          </th>
          <th>
            Tbbav
          </th>
          <th>
            Tbqav
          </th>
          <th>
          </th>

        </thead>
        <tbody>
          {data.map((el,i)=><tr key={i}>
            <td>
              {new Date(el[0]).toLocaleString('es-MX',optDate)}
            </td>
            {el.slice(1,6).map((da,o)=><td key={o}>
              {da}
            </td>)}
            <td>
              {new Date(el[6]).toLocaleString('es-MX',optDate)}
            </td>
            {el.slice(7).map((da,o)=><td key={o}>
              {da}
            </td>)}
          </tr>)}
        </tbody>
      </Table>
    </Container>
  )
}

export default TradingTable
