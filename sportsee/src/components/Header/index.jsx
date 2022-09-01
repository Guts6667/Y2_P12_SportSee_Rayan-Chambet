import './Header.css'
import logo from '../../assets/logo.png' 
import { Link } from 'react-router-dom';
import React from 'react';
import Sidebar from '../Sidebar';
const Header = () => {

    return (
        <div className='container__Nav'>
            <header>
                <div className='header-boxLogo'>
                <img src={ logo } alt='Logo SportSee'/>
                </div>
                <nav>
                    <Link to= '/' className='test'>Accueil</Link>
                    <Link to= '/profil'>Profil</Link>
                    <Link to= '/settings'>Réglage</Link>
                    <Link to= '/community'>Communauté</Link>
                </nav>
            </header>
            <Sidebar />
        </div>
        
        

    )
}

export default Header;