import { useState } from 'react';
import './App.css'
import { vData } from '../data.js'
import { Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/style.scss"

import './view.scss'

import NavBar from '../components/NavBar.jsx';
import Visual from '../components/home/Visual.jsx';
import GalleryList from '../components/home/GalleryList.jsx';
import Content from '../components/home/Content.jsx';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

function App() {
  const [isActive, setIsActive] = useState(false)
  function boxView() {
    // alert("test")
    setIsActive(!isActive)
    // 
  }
  return (
    <div className="App">

      <div className={`boxWrap ${isActive ? 'active' : ''}`} onClick={boxView}>
        <div class="bar start"></div>
        <div class="bar middle"></div>
        <div class="bar end"></div>
      </div>

    <div className={`bgWrap ${ isActive ? 'view' : ''} `} onClick={boxView}>
      <div className='box'>
        <h3>view</h3> 
      </div>
    </div>

    </div>
  )
}


export default App;