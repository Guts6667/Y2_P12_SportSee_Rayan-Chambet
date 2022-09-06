import React from "react";
import { Link } from 'react-router-dom';
import './Home.css'
import { USER_MAIN_DATA } from "../../data/mockedDatas";

// Creation of the page Home
const Home = () => {
    //Fetching user main datas
    const userDatas = USER_MAIN_DATA;
    console.log(userDatas);

    return (
        <main>
            <h1>Bienvenue chez SportSee</h1>
            <span>Veuillez sélectionnez un utilisateur :</span>
            <div className="box-btn">
                {/*Creates a link leading towards the Dashboard for each ID found */}
                {userDatas.map(user => 
                    <Link to = {`/dashboard/${user.id}` } key={`${user.userInfos.firstName}-${user.id}`} className = 'userBtn'>{user.userInfos.firstName}</Link>
                )}
            </div>
        </main>

    )
}

export default Home;