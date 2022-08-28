import React from 'react'
import Events from './Events'
import LogIn from './Login'
import SetEvent from './SetEvent'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'



const Main = () => {
  return (
    <div>
      <h1>labas</h1>
      <Router>
        <Routes>
          <Route exact path='/' component={LogIn} />
          <Route exact path='/events' component={Events} />
          {/* <Route exact path='/events' component={SetEvent} /> */}
        </Routes>
      </Router>
        <LogIn/>
        <SetEvent/>
        <Events/>
    </div>
  )
}

export default Main