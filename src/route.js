import React from 'react'
import { Route, Switch} from "react-router-dom"
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'

export default(
    <Switch>
        <Route exact path="/" component= { Dashboard }/>
        <Route path="/Wizard" component= { Wizard }/>
    </Switch>
)