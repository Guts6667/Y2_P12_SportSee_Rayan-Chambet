import React, { useEffect } from "react";
import { useParams } from "react-router";
import './Dashboard.css'
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../../data/mockedDatas";
import KeyDatas from "../../components/KeyDatas";
import DailyActivity from "../../components/DailyActivity";
import DailyAverageSession from "../../components/DailyAverageSession";
import UserPerformance from "../../components/UserPerformance";


const Dashboard = () => {
    // Retrieves the user ID and converts it to an integer
    let userId = parseInt(useParams().id);

    //USER_MAIN_DATA
    // Temporary variable
    let tempUserDatas = null;
    // Compares user datas, if true => datas are stored in temporary variable
    USER_MAIN_DATA.map(data => data.id === userId ? tempUserDatas = data : console.log('Searching for ID'))
    // Destructuring of temporary variable
    const {id, userInfos, todayScore, keyData, score} = tempUserDatas;
    // -----------------------------------

    //USER_ACTIVITY
    let userActivity = null
    USER_ACTIVITY.map(data => data.userId === userId ? userActivity = data : console.log('Seaching for ID'));

    //USER_AVERAGE_SESSIONS
    let userAverageSession = null;
    USER_AVERAGE_SESSIONS.map(data => data.userId === userId ? userAverageSession = data : console.log('searching for ID'))

    //USER_PERFORMANCE
    let userPerformance = null;
    USER_PERFORMANCE.map(data => data.userId === userId ? userPerformance = data : console.log('searching for ID'))

    return(

        // loadingState ? (
            <section className = 'section___dashboard'>
                <div>
                    <h1>Bonjour <strong>{ userInfos.firstName }</strong></h1>
                    <span>Félicitations, vous avez explosé vos objectifs hier 👏</span>
                </div>
                <div className="container__infos">
                    <div className="container__infos-charts">
                        <DailyActivity userActivity = {userActivity} />
                        <div className="container__infos-charts-box">
                            <DailyAverageSession userAverageSession = {userAverageSession} />
                            <UserPerformance  userPerformance = {userPerformance} />
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