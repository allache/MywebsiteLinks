import React from 'react';
import Main from './main';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
export default function App() {

 

//  <Route path="*" element={<NotFound/>}/>


  return (
    <Router>
    <Routes>
      <Route path='/Person' element={<Main/>}/>
    
    </Routes>

  </Router>
      )
}
