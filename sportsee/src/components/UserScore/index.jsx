import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell} from "recharts";
import './UserScore.css'
import PropTypes from 'prop-types';

const UserScore = (dataScore) => {
    let datasScore = dataScore
const [dataScorePercentage, setDatasScorePercentage] = useState(0)
const [dataTodayScorePercentage, setDatasTodayScorePercentage] = useState(0)

useEffect(() => {
    if(datasScore.score !== null || datasScore.score !== undefined){
        setDatasScorePercentage( datasScore.score * 100)
    }
    if(datasScore.todayScore !== null || datasScore.todayScore !== undefined){
        setDatasTodayScorePercentage(datasScore.todayScore * 100)
    }
   

}, [datasScore])

const scoreDatas = [{value : datasScore.score}, {value : 1 - datasScore.score}]
const todayScoreDatas = [{value : datasScore.todayScore}, {value : 1 - datasScore.todayScore}]
    return(
        dataScore && (
<div className="container__score">
        <ResponsiveContainer width="100%" height='100%'>
        <PieChart width={730} height={250}>
        <circle cx="50%" cy="50%" fill="white"  r="70"/>
        <text fontSize={14} x="10" y="40" >Score</text>
        <text fontSize={20} fontWeight={500} x="40%" y="50%">{ `${dataScorePercentage ? dataScorePercentage : dataTodayScorePercentage }%` }</text>
        <text fontSize={14}  x="25%" y="60%" fill="grey" >de votre objectif</text>
        {scoreDatas ? (
            <Pie data={scoreDatas ? scoreDatas : todayScoreDatas } dataKey="value" cx="50%" cy="50%" outerRadius={80} innerRadius ="70" startAngle={90} 
                endAngle={450}  fill="#FF0000">
            <Cell  fill= "red" />
            <Cell fill="transparent" />
            </Pie>
        ) : ("")}
        {todayScoreDatas ? (
            <Pie data={todayScoreDatas} dataKey="value" cx="50%" cy="50%" outerRadius={80} innerRadius ="70" startAngle={90} 
                endAngle={450}  fill="#FF0000">
            <Cell  fill= "red" />
            <Cell fill="transparent" />
            </Pie>
        ) : ("")}

            
        </PieChart>
        </ResponsiveContainer>
        <div className="score">
            {/*Insert text here */}
        </div>
    </div>
        )
        
    )
}

UserScore.propTypes  = {
dataScorePercentage : PropTypes.number,
dataTodayScorePercentage : PropTypes.number,
todayScore : PropTypes.number,
todayScoreDatas : PropTypes.number
}

UserScore.defaultProps = {
    dataScorePercentage : 0,
    dataTodayScorePercentage : 0,
    todayScore : 0,
    todayScoreDatas : 0
}


export default UserScore;