import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import News from './Pages/News'
import Contacts from './Pages/Contacts'
import Menu from './Pages/Menu'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/about' component={About} />
        <Route exact path='/news' component={News} />
        <Route exact path='/contacts' component={Contacts} />
      </Switch>
    </Router>
  )
}

export default App
