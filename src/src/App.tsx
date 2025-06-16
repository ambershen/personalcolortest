import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UploadProvider } from './context/UploadContext';
import WelcomeScreen from './screens/WelcomeScreen';
import UploadScreen from './screens/UploadScreen';
import AnalyzeScreen from './screens/AnalyzeScreen';
import ResultScreen from './screens/ResultScreen';

function App() {
  return (
    <UploadProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/upload" element={<UploadScreen />} />
            <Route path="/analyze" element={<AnalyzeScreen />} />
            <Route path="/result" element={<ResultScreen />} />
          </Routes>
        </div>
      </Router>
    </UploadProvider>
  );
}

export default App;
