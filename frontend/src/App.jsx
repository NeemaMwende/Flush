import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Container>
      </Container>
     <Footer/>
    </div>
  );
}

export default App;
