import React from 'react';
import Main from './main';
import Secondpage from './secondpage';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
export default function App() {

 

//  <Route path="*" element={<NotFound/>}/>


  return (
    <Router>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/person' element={<Secondpage/>}/>

    </Routes>

  </Router>


      )
}
