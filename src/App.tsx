import './App.css';
import { About } from './components/about/about';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Landing } from './components/landing';
import { Navbar } from './components/navbar';
import { Portfolio } from './components/portfolio/portfolio';

function App() {

  return (
    <>
      <Landing></Landing>
      <Navbar></Navbar>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
