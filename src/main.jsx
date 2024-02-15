import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Search from './Search.jsx'
import Card from './Card.jsx'
import Details from './Details.jsx'
import Genres from './Genres.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Card/>}></Route>
    <Route path='Search' element={<Search/>}></Route>
    <Route path={'/Details'} element={<Details/>}></Route>
    <Route path='/Search/Genres' element={<Genres/>}></Route>
    <Route path='/Search/Genres/Details' element={<Details />}></Route>
    <Route path='/Search/Details' element={<Details/>}></Route>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
