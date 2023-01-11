// import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import BookList from '../../components/BookList/BookList';

const Home = () => {
  return (
    <main>
        {/* <Header /> */}
        {/* <Outlet /> */}
        <BookList/>
    </main>
  )
}

export default Home
