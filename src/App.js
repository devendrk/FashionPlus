import React from 'react'
import { Route, Link } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import './app.css'

const HatsPage = (props) => (
  <div>
    <h1>Hats PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
    </div>
  )
}

export default App
