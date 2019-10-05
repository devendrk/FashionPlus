import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUP from './pages/signIn-and-signUp/signin-and-signup.component.jsx'
import { auth } from "./firebase/firebase.utils";

import './app.css'



export default class App extends Component {
  state = {
    currentUser: null
  }

  unscubscribeFromAuth = null // prevents memory leaks

  componentDidMount() {
    this.unscubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log('user', user)
    })
  }
  componentWillUnmount() {
    this.unscubscribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUP} />
        </Switch>
      </div>
    )
  }
}
