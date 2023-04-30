
import React from 'react'
import axios from 'axios'
import {useState} from 'react'
import NavBar from './components/NavBar/NavBar'
import{Actions,comedy,Documentaries,Horror,orginals, Romance} from './urls'
import './App.css'
import Banner from './components/Banner/Banner'
import RawPost from './components/RawPost/RawPost'


function App(){
  return (
     <div className='App'>
         <NavBar/>
         <Banner/>
         <RawPost url={orginals} title='Netflix Originals'/>
         <RawPost url={Actions} title='Actions' isSmall/>
         <RawPost url={comedy} title='Comedy' isSmall/>
         <RawPost url={Horror} title='Horror' isSmall/>
         <RawPost url={Romance} title='Romance' isSmall/>
         <RawPost url={Documentaries} title='Documentaries' isSmall/>
     </div>
  )
}

export default App


//mounting
//updating
//unmount





