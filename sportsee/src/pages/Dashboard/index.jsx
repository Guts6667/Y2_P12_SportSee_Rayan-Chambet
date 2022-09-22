import React from "react";
import { useParams } from "react-router";
import './Dashboard.css'
import { USER_MAIN_DATA} from "../../data/mockedDatas";
import KeyDatas from "../../components/KeyDatas";
import DailyActivity from "../../components/DailyActivity";
import DailyAverageSession from "../../components/DailyAverageSession";
import UserPerformance from "../../components/UserPerformance";
import UserScore from "../../components/UserScore";
import useApi from "../../utils/service/useApi.js"
import { DataTypeContext } from "../../utils/context";
import { useContext } from "react";
const Dashboard = () => {
    const { dataType}  = useContext(DataTypeContext);
    console.log(dataType);
    // Fix issue with dataMain
    const url = dataType; 

    // Retrieves the user ID and converts it to an integer
    let userId = parseInt(useParams().id);
    const dataMain = useApi(url.userMainDatas(userId));
    const dataActivity = useApi(url.userActivityDatas(userId))
    const dataPerformance = useApi(url.userPerformanceDatas(userId))
    const dataSession = useApi(url.userSessionDatas(userId))
    
    //USER_MAIN_DATA
    // Temporary variable
    let tempUserDatas = undefined;

    // Compares user datas, if true => datas are stored in temporary variable
    USER_MAIN_DATA.map(data => data.id === userId ? tempUserDatas = data : console.log('Searching for ID'))
    // Destructuring of temporary variable
    const {id, userInfos, todayScore, keyData, score} = tempUserDatas;
    // -----------------------------------

    return(

            <section className = 'section___dashboard'>
                <div>
                    {userInfos.firstName ? (
                        <h1>Bonjour <strong>{ userInfos.firstName }</strong></h1>
                    ) : ""}
                    
                    <span>Félicitations, vous avez explosé vos objectifs hier 👏</span>
                </div>
                <div className="container__infos">
                    <div className="container__infos-charts">
                        {dataActivity ? (
                            <DailyActivity userActivity = {dataActivity.data} />
                        ) : ""}
                        
                        <div className="container__infos-charts-box">
                            {dataSession ? (
                                <DailyAverageSession userAverageSession = {dataSession.data} /> 
                            ) : ""}
                            
                            {dataPerformance ? (
                                <UserPerformance  userPerformance = {dataPerformance.data} />
                            ) : ""}
                            
                            <UserScore todayScore = {todayScore} score = {score} />
                        </div>
                    </div>
                    <KeyDatas keyData = {keyData} />
                </div>
            </section>

        )
}

    


export default Dashboard;