import React from 'react'
import './Header.css'
import logo from '../../assets/svg/logo.svg' 
import search from '../../assets/svg/search.svg' 
import six from '../../assets/svg/six.svg' 
import Button from '../../assets/svg/Button.svg'

function Header() {
  return (
    <header>
      <div className="container">
        <div className="con-header">
          <div className='logo-con'>
            <img src={logo} alt="" />
          </div>
          <div className='text-con'>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Plant Care</li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className='button-con'>
            <img src={search} alt="" />
            <div className="six-con">
            <img src={six} alt="" />
            <div>6</div>
            </div>
            <div className="but-con">
              <button>

              <img src={Button} alt="" />
                login
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 