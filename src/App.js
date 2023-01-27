import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.component';
import Banner from './components/Banner.component';
import Skills from './components/Skills.component';
import Projects from './components/Projects.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact.component';
import Footer from './components/Footer.component';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
