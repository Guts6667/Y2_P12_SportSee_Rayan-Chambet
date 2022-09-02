import './Header.css'
import logo from '../../assets/logo.png' 
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
const Header = () => {
    const [path, setPath] = useState(undefined);
    const pathname = window.location.pathname
    useEffect(() => {
        if(pathname ==='/'){
            setPath(false)
        }else{
            setPath(true)
        }
    }, [pathname])
    return (
        <div className='container__Nav'>
            <header>
                <div className='header-boxLogo'>
                <img src={ logo } alt='Logo SportSee'/>
                </div>
                {path && (
                    <nav>
                    <Link to= '/' className='test'>Accueil</Link>
                    <Link to= '/profil'>Profil</Link>
                    <Link to= '/settings'>Réglage</Link>
                    <Link to= '/community'>Communauté</Link>
                </nav>
                )}
                
            </header>
            {path && (
                <Sidebar />
            ) }
            
        </div>
        
        

    )
}

export default Header;