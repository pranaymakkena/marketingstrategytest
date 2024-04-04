import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import Results from './components/Results';
import About from './components/About';
import Error from './components/Error';
import Success from './components/Success';

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/form" component={Form} />
                    <Route path="/results" component={Results} />
                    <Route path="/about" component={About} />
                    <Route path="/success" component={Success} />
                    <Route component={Error} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
