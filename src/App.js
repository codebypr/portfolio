import React, { Component } from 'react'
import NavBar from './Component/NavBar'
import Home from './Component/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './Component/About'
import Project from './Component/Project'
import Contact from './Component/Contact'

export class App extends Component {
  render() {
    return (
<Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/portfolio' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      </Router>
    )
  }
}

export default App