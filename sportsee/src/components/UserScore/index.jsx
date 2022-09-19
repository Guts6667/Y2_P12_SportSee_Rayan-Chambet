import React from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis, Legend,PieChart, Pie, Cell} from "recharts";
import './UserScore.css'


const UserScore = (dataScore) => {
    console.log(dataScore);
// const { score, todayScore} = datas;
// console.log(datas.score);

const datas = [{value : dataScore.score}, {value : 1 - dataScore.score}]

    return(
        <div className="container__score">
        <ResponsiveContainer width="100%" height='100%'>
        <PieChart width={730} height={250}>
        <circle cx="50%" cy="50%" fill="white"  r="70"/>
        <text fontSize={18} x="10" y="50">Score</text>
            <Pie data={datas} dataKey="value" cx="50%" cy="50%" outerRadius={80} innerRadius ="70" startAngle={90} 
                endAngle={450}  fill="#FF0000">
            <Cell  fill= "red" />
            <Cell fill="transparent" />
            </Pie>
        </PieChart>
        </ResponsiveContainer>
        <div className="score">
            {/*Insert text here */}
        </div>
    </div>
    )
}

export default UserScore;