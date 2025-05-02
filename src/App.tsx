import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { getTheme, setTheme } from './utils/storage';

// Pages
import Home from './pages/Home';
import MarkingScheme from './pages/MarkingScheme';
import ExamTips from './pages/ExamTips';
import Resources from './pages/Resources';

function App() {
  useEffect(() => {
    const initialTheme = getTheme();
    setTheme(initialTheme);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marking-scheme" element={<MarkingScheme />} />
          <Route path="/exam-tips" element={<ExamTips />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;