import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/public/home/index.jsx'
import './css/globalcss/index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Error from './pages/Error/index.jsx'
import Win from './pages/public/win/index.jsx'
import Linebet from './pages/public/linebet/index.jsx'
import Betwinner from './pages/public/betwinner/index.jsx'
import Melbet from './pages/public/melbet/index.jsx'

const router = createBrowserRouter (
  createRoutesFromElements (
      <Fragment>
          <Route path="/" element={<Home />} errorElement={<Error/>} />
          <Route path="/1win" element={<Win />} errorElement={<Error/>} />
          <Route path="/linebet" element={<Linebet />} errorElement={<Error/>} />
          <Route path="/betwinner" element={<Betwinner />} errorElement={<Error/>} />
          <Route path="/melbet" element={<Melbet />} errorElement={<Error/>} />
      </Fragment>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
