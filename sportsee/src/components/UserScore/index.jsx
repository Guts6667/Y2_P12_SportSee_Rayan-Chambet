import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis, Legend,PieChart, Pie, Cell} from "recharts";
import './UserScore.css'


const UserScore = (dataScore) => {
const [dataScorePercentage, setDatasScorePercentage] = useState(0)
const [dataTodayScorePercentage, setDatasTodayScorePercentage] = useState(0)

useEffect(() => {
    if(dataScore.score !== null || dataScore.score !== undefined){
        console.log(dataScore.score * 100);
        setDatasScorePercentage( dataScore.score * 100)
    }
    if(dataScore.todayScore !== null || dataScore.todayScore !== undefined){
        setDatasTodayScorePercentage(dataScore.todayScore * 100)
    }
   

}, [dataScore])

const scoreDatas = [{value : dataScore.score}, {value : 1 - dataScore.score}]
const todayScoreDatas = [{value : dataScore.todayScore}, {value : 1 - dataScore.todayScore}]
    return(
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
}

export default UserScore;