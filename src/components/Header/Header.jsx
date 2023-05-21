import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
      <nav>
        <a href="#" className='link'>
        Home
        </a>
        <a href="#" className='link'>
         О нас
        </a>
        <a href="#" className='link'>
          Новости
        </a>
        <a href="#" className='link'>
          Новинки
        </a>
      </nav>
    </div>
  )
}

export default Header