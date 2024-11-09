import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./MainPage.jsx'))
const Projects = React.lazy(() => import('./ProjectsPage.jsx'))
const UnderDevelopement = React.lazy(() => import('./UnderDevelopment.jsx'))

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="portfolio/" element={<Home />} />
          <Route path="portfolio/projects" element={<UnderDevelopement />} />
          <Route path="portfolio/under-development" element={<UnderDevelopement />}/>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App 
