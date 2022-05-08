import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import  './App.scss'
import Users from './Components/Users/Users'
import SomeMaine from './Pages/SomeMaine/SomeMaine'
import UsersList from './Pages/UsersList/UsersList'



const App = () => {
  return (
    
      <div className='app__wrap'>
        <Router>
          <Routes>
            <Route path='/' element={<SomeMaine />} />
            <Route element={<UsersList />} >
              <Route path='/users' />
              <Route path='/users/user'/>
            </Route>
          </Routes>
        </Router>
      </div>
    
    
  ) 
}

export default App