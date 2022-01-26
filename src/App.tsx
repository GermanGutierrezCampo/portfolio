import './App.css';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Landing } from './components/landing';
import { Navbar } from './components/navbar';
import { Portfolio } from './components/portfolio';

function App() {

  return (
    <>
      <Landing></Landing>
      <Navbar></Navbar>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </>
  );
}

export default App;
