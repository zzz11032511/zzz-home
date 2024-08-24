import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './global.css'
import Individual from './page/individual/index.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <Individual text="About" />,
  },
  {
    path: '/works',
    element: <Individual text="Works" />,
  },
  {
    path: '/skills',
    element: <Individual text="Skills" />,
  },
  {
    path: '/hobbies',
    element: <Individual text="Hobbies" />,
  },
  {
    path: '/links',
    element: <Individual text="Links" />,
  },
  {
    path: '/contact',
    element: <Individual text="Contact" />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
