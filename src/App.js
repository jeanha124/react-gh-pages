import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Blog from './components/blog'
import Projects from './components/projects'
import Photography from './components/photography'

function App() {
  return (
    <div id="colorlib-page" className="App">
      <div id="container-wrap">
        <Sidebar />
        <div id="colorlib-main">
          <Introduction />
          <About />
          <Projects />
          <Blog />
          <Photography />
        </div>
      </div>
    </div>
  );
}

export default App;
