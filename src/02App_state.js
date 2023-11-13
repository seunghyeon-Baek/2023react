import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [data, setData] = useState(1)
  let [listData, setlistData] = useState(['list1', 'lsit2', 'list3'])
  let [mView, setMView] = useState(false) // 모달 보이고 안 보이고
  let today = new Date();
  let time = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate()
  }
  return (
    <div className="App">
      <div>{data}</div>
      <button onClick={() => { setData(data + 1) }}>클릭</button>
      {
        listData.map(function (item, i) {
          return (
            <>
              <div className='flex'>
                <div className='list'>{item}</div>
                <div>{time.year} / {time.month} / {time.date}</div>
              </div>
            </>
          )
        })
      }
      <button onClick={()=>{setMView(!mView)}}>클릭</button>
      {
        mView == true ? <Modal></Modal> : null
      }
    </div>
  );
}

// 얘를 위에서 쓰려고하면 <Modal></Modal>
// 컴포넌트임(외부에서 만들고 다른곳에서 쓰려고)
function Modal() {
  return (
    <>
    <div className='modal'>
      <h3>제목</h3>
      <p>안녕하세요</p>
    </div>
    </>
  )
}



export default App;
