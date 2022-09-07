import React from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis, Legend } from "recharts";
import './UserScore.css'


const UserScore = (dataScore) => {
    console.log(dataScore);
// const { score, todayScore} = datas;
// console.log(datas.score);



    return(
        <div className="container__score">
        <ResponsiveContainer width="100%" height='100%'>
            <RadialBarChart 
                cx="50%" 
                cy="50%" 
                innerRadius='90%' 
                data={dataScore} 
                startAngle={180} 
                endAngle={-180} >
                <RadialBar 
                    minAngle={15} 
                    dataKey='score' 
                    fill= '#FF0000' 
                    cornerRadius={25} 
                    barSize={10} />
                <PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
                <circle cx="50%" cy="50%" fill="white" r="85"></circle>
            </RadialBarChart>
        </ResponsiveContainer>
        <div className="score">
            {/*Insert text here */}
        </div>
    </div>
    )
}

export default UserScore;