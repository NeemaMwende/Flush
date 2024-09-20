// import './App.css';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// import { Container } from 'react-bootstrap';

// function App() {
//   return (
//     <div className="App">
//      <Navbar/>
//       <Container>
//       </Container>
//      <Footer/>
//     </div>
//   );
// }

// export default App;
import './App.css';
import Footer from './components/Footer';
import NavbarComponent from './components/Navbar';  // Ensure correct import for NavbarComponent
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Container>
          {/* Add your routes or other content here */}
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
