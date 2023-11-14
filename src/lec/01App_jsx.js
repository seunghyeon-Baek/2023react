import { useState } from 'react';
import logo from './logo.svg';

function App() {
  let [listData, setListData] = useState(1) // listData 데이터, setListData 데이터 변경하는 곳
  return (
    <div className="App">
      <div>{listData}</div>
      <button onClick={()=>{setListData(listData+1)}}>click</button>
    
    </div>

  );
}

export default App;
