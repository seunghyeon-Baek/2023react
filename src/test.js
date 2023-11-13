import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [data, setData] = useState(1)
  }
  return (
    <div className="App">
      <div>{data}</div>
      <button onClick={() => { setData(data + 1) }}>클릭</button>
    </div>
  );

export default App;