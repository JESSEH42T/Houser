import React from 'react'
import logo from '../header_logo.png'
function Header(){  
        return(
            <div className='Header'>
                <img alt='logo' src= {logo}/><h1>Houser</h1>
            </div>
        )
    }
export default Header;