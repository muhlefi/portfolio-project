import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutMe from './pages/AboutMe'
import Project from './pages/Project'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutMe />} />
      <Route path="contact" element={<Contact />} />
      <Route path="project" element={<Project />} />
    </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router} />
  )
}

export default App
