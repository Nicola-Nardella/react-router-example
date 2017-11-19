import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import Main from './routes/main'
import NavBar from './components/NavBar'

const App = () => (
  <div>
    <NavBar />
    <Main />
  </div>
)

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
