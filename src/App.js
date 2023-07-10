import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MenuBar from './components/MenuBar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;