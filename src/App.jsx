import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Quality from './pages/Quality';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import PageWrapper from './components/PageWrapper';

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
          <Route
            path="/products/cold-press"
            element={<PageWrapper><ProductDetail type="coldPress" /></PageWrapper>}
          />
          <Route
            path="/products/refined"
            element={<PageWrapper><ProductDetail type="refined" /></PageWrapper>}
          />
          <Route path="/quality" element={<PageWrapper><Quality /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/faqs" element={<PageWrapper><FAQs /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
