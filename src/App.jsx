import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./MainPage.jsx'))
const Projects = React.lazy(() => import('./ProjectsPage.jsx'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App 