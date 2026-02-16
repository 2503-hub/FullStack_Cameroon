
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/History';
import Culture from './pages/Culture';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import Footer from "./components/Footer";
import TraditionalAttire from "./pages/culture/TraditionalAttire";
import Food from "./pages/culture/Food";
import Language from "./pages/culture/Language";
import TraditionalDances from "./pages/culture/TraditionalDances";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/culture/attire" element={<TraditionalAttire />} />
        <Route path="/culture/food" element={<Food />} />
        <Route path="/culture/language" element={<Language />} />
        <Route path="/culture/dances" element={<TraditionalDances />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;





