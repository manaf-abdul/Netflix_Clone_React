import React from 'react'
import './App.css';
import {originals,action} from './urls'
import NavBar from './components/navbar/NavBar'; 
import Banner from './components/Banner/Banner';                      
import RowPost from './components/RowPost/RowPost';



function App() {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title="Netflix Originals"/>
        <RowPost url={action} title="Action" isSmall/>
    </div>
  ); 
}

export default App;
