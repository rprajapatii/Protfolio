import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {About} from './about'
import {Project} from './project'
import {Contact} from './contact'
import  {Home} from './home'

export const Main = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/project" component={Project}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
    </Switch>
);
