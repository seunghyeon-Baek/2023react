import { useState } from 'react';
import './style.scss'
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import {vData} from '../data.js'
import ViewProduct from '../components/product/ViewProduct.js';
import MainComp from '../components/main/MainComp.js';

function App() {
  const [isActive, setisActive] = useState(false)
  const [viData, setVData] = useState(vData)

  return (
    <div className="App">
    <nav class="header container">
      <h1 className='logo'>Logo</h1>
      <ul className='menu'>
        {/* NavLink는 active가 자동으로 붙는다 */}
        <li><NavLink to='/' >home</NavLink></li>
        <li><NavLink to='/company'>company</NavLink></li>
        <li><Link to='/product'>Product</Link></li>
        <li><NavLink to='/community'>community</NavLink></li>
      </ul>
    </nav>

    <Routes>
        <Route path='/' element={<MainComp viData={viData}/>}></Route>
        <Route path='/company' element={<div className='container h100 bg flex-center' style={{backgroundImage:""}}>회사소개페이지</div>}></Route>
        <Route path='/product/:item' element={<ViewProduct viData={viData} />}></Route>
        <Route path='/community' element={<div className='container h100 bg comm flex-center'>소통의공간</div>}></Route>
    </Routes>

    </div>
  );
}

export default App;