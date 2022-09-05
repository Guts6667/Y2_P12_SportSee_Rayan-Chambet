import React from "react";
import { useParams } from "react-router";
import './Dashboard.css'
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../../data/mockedDatas";
import KeyDatas from "../../components/KeyDatas";
import DailyActivity from "../../components/DailyActivity";


const Dashboard = () => {
    //USER_MAIN_DATA
    // Retrieves the user ID and converts it to an integer
    let userId = parseInt(useParams().id);
    console.log(userId);
    let tempUserDatas = null;
    // Compares user datas, if true => datas are stored in temporary variable
    USER_MAIN_DATA.map(data => data.id === userId ? [tempUserDatas = data, console.log('Found ID')] : console.log('Searching for ID'))
    // Destructuring of temporary variable
    const {id, userInfos, todayScore, keyData, score} = tempUserDatas;
    // -----------------------------------

    //USER_ACTIVITY
    



    


    return(

        // loadingState ? (
            <section className = 'section___dashboard'>
                <div>
                    <h1>Bonjour <strong>{ userInfos.firstName }</strong></h1>
                    <span>Félicitations, vous avez explosé vos objectifs hier 👏</span>
                </div>
                <div className="container__infos">
                    <div>
                        <div>
                            <DailyActivity />
                        </div>
                        <div>

                        </div>
                    </div>
                    <KeyDatas keyData = {keyData} />
                </div>
            </section>
        // ) : (
            // <section className = "section___dashboard">
            //     <h1>Veuillez patienter</h1>
            // </section>
        )
    // )
}

    


export default Dashboard;