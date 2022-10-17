import React from "react";
import { useParams } from "react-router";
import './Dashboard.css'
import KeyDatas from "../../components/KeyDatas";
import DailyActivity from "../../components/DailyActivity";
import DailyAverageSession from "../../components/DailyAverageSession";
import UserPerformance from "../../components/UserPerformance";
import UserScore from "../../components/UserScore";
import useApi from "../../utils/service/useApi.js"
import { DataTypeContext } from "../../utils/context";
import { useContext } from "react";

const Dashboard = () => {
    // The dataType (Mocked or API) is retrieved through useContext 
    const { dataType}  = useContext(DataTypeContext);
    const url = dataType; 

    // Retrieves the user ID and converts it to an integer
    let userId = parseInt(useParams().id);
    //Fetches the datas depending on the url, it takes the userId retrieved through useParams() as parameter
    const dataMain = useApi(url.userMainDatas(userId));
    const dataActivity = useApi(url.userActivityDatas(userId))
    const dataPerformance = useApi(url.userPerformanceDatas(userId))
    const dataSession = useApi(url.userSessionDatas(userId))


    // -----------------------------------

    return(
        dataMain && (
            <section className = 'section___dashboard'>
            <div>
                {dataMain.userInfos.firstName && (
                    <h1>Bonjour <strong>{ dataMain.userInfos.firstName }</strong></h1>
                ) }
                
                <span>Félicitations, vous avez explosé vos objectifs hier 👏</span>
            </div>
            <div className="container__infos">
                <div className="container__infos-charts">
                    {dataActivity && (
                        <DailyActivity userActivity = {dataActivity.session} />
                    ) }
                    
                    <div className="container__infos-charts-box">
                        {dataSession && (
                            <DailyAverageSession userAverageSession = {dataSession} /> 
                        ) }
                        
                        {dataPerformance && (
                            <UserPerformance  userAveragePerformance = {dataPerformance} />
                        ) }
                        
                        <UserScore todayScore = {dataMain.todayScore} score = {dataMain.score} />
                    </div>
                </div>
                <KeyDatas keyData = {dataMain.keyData} />
            </div>
        </section>
        )
           

        )
}




export default Dashboard;