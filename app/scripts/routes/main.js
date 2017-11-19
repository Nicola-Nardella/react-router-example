import React from 'react'
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import About from '../pages/About'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Article from '../pages/Article'

const routes = () => (
  <Switch>
    <Redirect exact from='/' to='/home'/>
    <Route exact path='/home' component={Home}/>
    <Route path='/about' component={About}/>
    <Route exact path='/blog' component={Blog}/>
    <Route exact path='/blog/:article' component={Article}/>
  </Switch>
)

export default routes
