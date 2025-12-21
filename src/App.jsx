import { BrowserRouter as Router, Routes, Route, ScrollRestoration, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SocietyTemplate from './pages/SocietyTemplate';
import Events from './pages/Events';
import Media from './pages/Media';
import Newsletter from './pages/Newsletter';
import Preloader from './components/Preloader';
import ThreeBackground from './components/ThreeBackground';
import './App.css'

// ScrollToTop component to reset scroll on route change

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="preloader" onFinish={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <ThreeBackground />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen bg-transparent font-sans text-[var(--text-main)] isolation-auto"
          >
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/society/:id" element={<SocietyTemplate />} />
                <Route path="/events" element={<Events />} />
                <Route path="/media" element={<Media />} />
                <Route path="/newsletter" element={<Newsletter />} />
              </Routes>
            </main>
            <Footer />
          </motion.div>
        </>
      )}
    </Router>
  );
}

export default App;
