import React from "react";
// import { useEffect } from "react";
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {



    return (
        <main>
            <h1>Bienvenue chez SportSee</h1>
            <span>Veuillez sélectionnez un utilisateur :</span>
            <div className="box-btn">
                <Link to = { `/dashboard/${12}` } className = 'userBtn' >Karl</Link>
                <Link to = { `/dashboard/${18}` } className = 'userBtn' >Cecilia</Link>
            </div>
        </main>

    )
}

export default Home;