import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import CreatePost from './components/Pages/CreatePost'
import Feed from './components/Pages/Feed'

function App() {

  return (
    <div>

      <Router>
        <Routes>
          <Route path='/create-post' element={<CreatePost/>}/>
          <Route path='/feed' element={<Feed/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
