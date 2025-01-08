import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';
import * as ROUTES from "./routes.js"

const Home = React.lazy(() => import('./MainPage.jsx'))
const Projects = React.lazy(() => import('./ProjectsPage.jsx'))
const UnderDevelopement = React.lazy(() => import('./UnderDevelopment.jsx'))

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path={ROUTES.HOME_ROUTE} element={<Home />} />
        <Route path={ROUTES.PROJECTS_ROUTE} element={<UnderDevelopement />} />
        <Route path={ROUTES.UNDER_DEVELOPMENT_ROUTE} element={<UnderDevelopement />}/>
      </Routes>
    </Suspense>
  )
}

export default App
