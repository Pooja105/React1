import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './Aboutme';
import ContactMe from './contact';
import Resume from './resume';
import Projects from './Projects';
import { Switch, Route} from 'react-router-dom';

const Main = (props) => {
    return(
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contact" component={ContactMe} />
        <Route path="/resume" component={Resume} />
        <Route path="/project"component={Projects} />
    </Switch>  
    );  
}

export default Main;