import React, {useState} from 'react';
import Row from './row';
const Table = () => {
  const [rowCount,setCount] = useState(1);
  const [maxRows,minRows] = [10,1];
  return(
    <div>
    <button onClick={() => setCount(rowCount+1 > maxRows ? maxRows : rowCount+1 )  } disabled={rowCount >= maxRows ? true : false}>Add Row</button>  &nbsp;&nbsp;
    <button onClick={() => setCount(rowCount-1 >= minRows ? rowCount-1 : minRows )  }  disabled={rowCount <= minRows ? true : false} >Delete Row</button>
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
