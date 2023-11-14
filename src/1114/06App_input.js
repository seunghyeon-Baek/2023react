import { useState } from 'react';
import './App.css';

// 다른 파일에서 만든 컴포넌트 사용하려면
import Modal from '../components/Modal';

function App() {
  const [vData, setVdata] = useState([
    "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    "2. Nisi, mollitia aliquam quisquam harum libero placeat delectus",
    "3. Facere, amet fugit sequi asperiores quo veniam explicabo laudantium."
  ])

  const [num, setNum] = useState(0)
  const [view, setView] = useState(false)
  const [textData,setTextData] = useState("")

  const listView = function(i){
   setNum(i)
   //console.log(i);
   setView(true) // 모달창
  }

  const handleClose = ()=>{
    setView(false)
  }

  return (
    <div className="App">
      <div className='num'>
        {num}
      </div>
      <ul className='lists'>
      {
        vData.map(function(item, i){ // 몇번째 클릭하는지 i 추가
          return(
            <>
            <li onClick={()=>{listView(i)}}> {item}</li>
            </>
          )
        })
      }

      </ul>
      {
        view == true ? <Modal vContent={vData[num]}  onClose={handleClose} /> : null
      }
      {textData}<br/>
      <input type="text" onChange={(e)=>{setTextData(e.target.value)}} value={textData}/>
      <button onClick={()=>{
        let copy = [...vData] // 배열 딥카피  ... 왜 쓰는지
        copy.unshift(textData) // 배열 사용할 때는 push, pop
        console.log(copy)
        setVdata(copy)
       }}>입력</button>
      <button onClick={()=>{setTextData('')}}>지움</button>
    </div>
  )
}

export default App;