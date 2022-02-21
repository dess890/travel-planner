import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Results from './pages/Results';
import { Wrapper } from '@googlemaps/react-wrapper';
import HowItWorks from './pages/HowItWorks'



function App() {
  return (
    <Wrapper apiKey='AIzaSyC_n2qTp9TfUfmfd9QpWl1-XkgrLfTABKI' libraries={['places']}>
      <div className="App">
        <Navbar />
        <div style={{ display: 'inline-flex' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/Results" element={<Results />} />
        </Routes>
        <Routes>
          <Route path="/HowItWorks" element={<HowItWorks />} />
        </Routes>
      </div>
    </Wrapper>
  )

}

export default App;
