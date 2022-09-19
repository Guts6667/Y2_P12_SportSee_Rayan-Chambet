import React from "react";
import "./DatasPage.scss"
import { Link } from 'react-router-dom';

const DatasPage = () => {

    const hideModal = () => {
        let modal = document.querySelector(".container__modal");
        modal.classList.add('hidden')
        document.addEventListener('click', (e) => {
            e.preventDefault()
            let choice = e.target.textContent;
            console.log(choice);
            localStorage.setItem("datas", choice)
        })
        
    }
    
    return(

        <div className="container__modal" >
        <h2>Bienvenue chez Sportsee, veuillez choisir un type de donnée</h2>
        <div className="container__buttonDatas">
            <Link to={"/Home"} onClick={hideModal} className = "container__buttonDatas-btn" >Mockées</Link>
            <Link to={"/Home"} onClick={hideModal} className = "container__buttonDatas-btn" >API</Link>

        </div>
    </div>
    )
}
export default DatasPage;