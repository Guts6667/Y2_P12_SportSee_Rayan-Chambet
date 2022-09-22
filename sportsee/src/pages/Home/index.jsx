import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { urlApiDatas } from "../../utils/const/urlApiDatas";
import { DataTypeContext } from "../../utils/context";
import "./Home.scss";

const Home = () => {

    const {  toggleDataType, dataType} = useContext(DataTypeContext);

    return (
<main className="container__home">
            <h1>Bienvenue chez SportSee</h1>
            <div>
                <span>Cliquez pour changer le type de données : </span>
                <button onClick={toggleDataType}>{dataType === urlApiDatas ? 'API' : 'Mockées'}</button>
            </div>
            <span>Veuillez sélectionnez un utilisateur :</span>
            <div className="box-btn">
                <Link to = {`/dashboard/12` } className = 'userBtn'>Karl</Link>
                <Link to = {`/dashboard/18` } className = 'userBtn'>Cécilia</Link>
            </div>
        </main>
  
        

    ) 
}

export default Home;