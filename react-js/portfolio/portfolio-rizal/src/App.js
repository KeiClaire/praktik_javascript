import Intro from './component/Intro';
import Navbar from './component/Navbar';
import AboutMe from './component/AboutMe';
import Skills from './component/Skills';
import Connect from './component/Connect';

import "../src/App.css"

function App() {
  return (
    <div>
      <Navbar/>
      <Intro />
      <AboutMe />
      <Skills />
      <Connect />
    </div>
  );
}

export default App;
