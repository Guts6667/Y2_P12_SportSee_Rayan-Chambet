import React from "react";
// import { useEffect } from "react";
import { useState } from "react";
import "./DataSwitchModal.scss"


const DataSwitchModal = () => {

    const [isBtnClicked, setIsBtnClicked] = useState(false)
    const hideModal = () => {
        let modal = document.querySelector(".container__modal");
        modal.classList.add('hidden')
        document.addEventListener('click', (e) => {
            let choice = e.target.textContent;
            setIsBtnClicked(choice)
        })
        return isBtnClicked
    }
console.log(isBtnClicked);
    return(

        <div className="container__modal" >
            <h2>Bienvenue chez Sportsee, veuillez choisir un type de donnée</h2>
            <div className="container__buttonDatas">
                <button onClick={hideModal}>Mockées</button>
                <button onClick={hideModal}>API</button>
            </div>
        </div>
    )
}

export default DataSwitchModal;