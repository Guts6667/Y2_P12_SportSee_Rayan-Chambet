import React from "react";
import './Sidebar.css';
import iconSwim from '../../assets/icon-swim.png';
import iconBike from '../../assets/icon-bike.png';
import iconGym from '../../assets/icon-gym.png';
import iconMeditation from '../../assets/icon-meditation.png';

// Sidebar component
const Sidebar = () => {

return(

    <div className="sidebar">
        <img src={iconMeditation} alt="Icône meditation" />
        <img src={iconSwim} alt="Icône nageur" />
        <img src={iconBike} alt="Icône cycliste" />
        <img src={iconGym} alt="Icône fitness" />
        <div className="sidebar-text">
            <span>Copiryght, SportSee 2020</span>
        </div>
        
    </div>

)

}

export default Sidebar;