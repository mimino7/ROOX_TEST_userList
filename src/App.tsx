import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import  './App.scss'
import SomeMaine from './Pages/SomeMaine/SomeMaine'
import UsersList from './Pages/UsersList/UsersList'



const App = () => {
  return (
    
      <div className='app__wrap'>
        <Router>
          <Routes>
            <Route path='/' element={<SomeMaine />} />
            <Route path='/*' element={<UsersList />} />
          </Routes>
        </Router>
      </div>
  ) 
}

export default App