import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landingpage';
import About from './aboutme';
import Projects from './projects';
import Contact from './contact';

const Routing = (props) => (
    <Switch location={props.location}>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects}/>
    </Switch>
)

export default Routing;