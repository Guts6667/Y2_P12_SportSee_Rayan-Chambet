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
import PropTypes from 'prop-types';

const Dashboard = () => {
    const { dataType}  = useContext(DataTypeContext);
    // Fix issue with dataMain
    const url = dataType; 

    // Retrieves the user ID and converts it to an integer
    let userId = parseInt(useParams().id);
    const dataMain = useApi(url.userMainDatas(userId));
    const dataActivity = useApi(url.userActivityDatas(userId))
    const dataPerformance = useApi(url.userPerformanceDatas(userId))
    const dataSession = useApi(url.userSessionDatas(userId))

    if(dataMain){
        console.log(dataMain);
    }
    

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


    Dashboard.propTypes = {
        userInfos : PropTypes.object,
        todayScore : PropTypes.number || PropTypes.undefined,
        keyData : PropTypes.object,
        score : PropTypes.number, 
        dataSession : PropTypes.object

    }


export default Dashboard;