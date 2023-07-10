import React, { useContext } from 'react';
import { PageContext } from './PageContext';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import MenuBar from './components/MenuBar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import './styles/App.css';

function App() {
  const { page } = useContext(PageContext);

  return (
    <PageProvider>
      <div className="App">
        <MenuBar />
        <div className="container">
          {page === 'home' && <Home />}
          {page === 'about' && <About />}
          {page === 'projects' && <Projects />}
          {page === 'resume' && <Resume />}
          {page === 'contact' && <Contact />}
        </div>
      </div>
    </PageProvider>
  );
}

export default App;
