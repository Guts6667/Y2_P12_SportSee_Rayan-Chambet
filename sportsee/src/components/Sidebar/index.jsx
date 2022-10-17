import React from "react";
import './Sidebar.css';
import iconSwim from '../../assets/icon-swim.png';
import iconBike from '../../assets/icon-bike.png';
import iconGym from '../../assets/icon-gym.png';
import iconMeditation from '../../assets/icon-meditation.png';
import { Link } from "react-router-dom";

// Sidebar component
const Sidebar = () => {

return(

    <div className="sidebar">
        <Link to={""}><img src={iconMeditation} alt="Icône meditation" /></Link>
        <Link to={""}><img src={iconSwim} alt="Icône nageur" /></Link>
        <Link to={""}><img src={iconBike} alt="Icône cycliste" /></Link>
        <Link to={""}><img src={iconGym} alt="Icône fitness" /></Link>
        
        <div className="sidebar-text">
            <span>Copiryght, SportSee 2020</span>
        </div>
        
    </div>

)

}

export default Sidebar;