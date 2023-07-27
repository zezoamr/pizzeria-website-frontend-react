import React from 'react'
import logo from '../assets/pizzaLogo.png'
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder'; 

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={logo} alt='image here'/>
            <div className="hiddenLinks">
              <Link to="/"> Home </Link>
              <Link to="/menu"> Menu </Link>
              <Link to="/about"> About </Link>
              <Link to="/contact"> Contact </Link>
            </div>
        </div> 
        <div className='rightSide'>
            <Link to='/'> Home </Link>
            <Link to='/menu'> Menu </Link>
            <Link to='/about'> About </Link>
            <Link to='/contact'> Contact </Link>
            <button>
              <ReorderIcon/>
            </button>
          </div> 
    </div>
  )
}

export default Navbar