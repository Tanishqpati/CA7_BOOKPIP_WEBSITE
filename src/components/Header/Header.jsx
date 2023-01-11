import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
            <Navbar />
        <header className='header'>
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>"Today a reader, tomorrow a leader." </h2><br />
                <p className='header-text fs-18 fw-3'>– Margaret Fuller</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header