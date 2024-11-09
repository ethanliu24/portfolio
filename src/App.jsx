import React from 'react'
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./MainPage.jsx'))
const Projects = React.lazy(() => import('./ProjectsPage.jsx'))
const UnderDevelopement = React.lazy(() => import('./UnderDevelopment.jsx'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="#/projects" element={<UnderDevelopement />} />
      <Route path="#/under-development" element={<UnderDevelopement />}/>
    </Routes>
  )
}

export default App 
