import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import News from './Pages/News'
import Contacts from './Pages/Contacts'
import Menu from './Pages/Menu'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import Cart from './Pages/Cart'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import Checkout from './Pages/checkout'
import Profile from './Pages/Profile'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate persistor={persistor} loading={null}>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/menu' component={Menu} />
              <Route exact path='/about' component={About} />
              <Route exact path='/news' component={News} />
              <Route exact path='/contacts' component={Contacts} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/checkout' component={Checkout} />
              <Route exact path='/profile' component={Profile} />
            </Switch>
          </Router>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  )
}

export default App
