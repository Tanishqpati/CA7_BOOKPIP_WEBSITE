// import React from 'react'
import Home from './pages/Home/Home';
import Register from "./pages/Register/Register";
// import Navbar from './components/Navbar/Navbar';
import {
Routes, Route
} from 'react-router-dom';
import BookList from './components/BookList/BookList';
import BookDetails from './components/BookDetails/BookDetails';
export default function App() {
  return (
    <Routes>
    <Route path = "/" element = {<Home />} />
      <Route path = "/register" element = {<Register />} />
      <Route path = "/book" element = {<BookList />} />
      <Route path = "/book/:id" element = {<BookDetails />} />
  </Routes>
  )
}
