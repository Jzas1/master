import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from './components/pages/homepage/homepage'
import './components/pages/homepage/homepage.styles.css'
import './App.css'
import HomePage from './components/pages/homepage/homepage'
 
const HatsPage =() => (
  <div>
    <h1>Hats Page</h1>
    <p>,smdfmskd</p>
  </div>
)

function App() {

  return (
    <div>
    <Switch>
      <Route  path='/hats' component={HatsPage} />
      <Route  path='/' component={HomePage} />
    </Switch>

  </div>
  );
}

export default App;
