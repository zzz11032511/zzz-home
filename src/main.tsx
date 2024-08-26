import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProfileDetail from './components/ProfileDetail/index.tsx'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './global.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <ProfileDetail path="/about" />,
  },
  {
    path: '/works',
    element: <ProfileDetail path="/works" />,
  },
  {
    path: '/hobbies',
    element: <ProfileDetail path="/hobbies" />,
  },
  {
    path: '/links',
    element: <ProfileDetail path="/links" />,
  },
  {
    path: '/contact',
    element: <ProfileDetail path="/contact" />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <footer>
      <p>© 2024 zzz</p>
    </footer>
  </StrictMode>,
)
