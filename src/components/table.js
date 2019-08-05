import React, {useState} from 'react';
import Row from './row';
const Table = () => {
  const [rowCount,setCount] = useState(1);
  return(
    <div>
    <button onClick={() => setCount(rowCount+1 > 10 ? 10 : rowCount+1 )  } disabled={rowCount >= 10 ? true : false}>Add Row</button>  &nbsp;&nbsp;
    <button onClick={() => setCount(rowCount-1 > 0 ? rowCount-1 : 1 )  }  disabled={rowCount <= 1 ? true : false} >Delete Row</button>
      <hr/>
      Total Number of Rows : {rowCount}
      <hr/>
      {Array.from(Array(rowCount).keys()).map((rn)=>{
        return(<Row key={rn+1} rowNumber={rn+1}/>)
      })}
    </div>
  )
}
export default Table;
