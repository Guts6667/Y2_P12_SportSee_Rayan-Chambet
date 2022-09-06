import React from "react";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 

const DailyActivityChart = (userActivity) => {
const {userId, sessions} = userActivity.sessions.sessions;
console.log(userId, sessions);


    return(

            sessions.map(session => {
                return(
{/* <BarChart width={500} height = {200} data ={session}>
                <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={session.day} />
                    <YAxis yAxisId="left" orientation="left" stroke="#ca0000" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey={session.kilogram} fill="#8884d8" />
                    <Bar yAxisId="right" dataKey={session.calories} fill="#82ca9d" />
                </BarChart> */}
                )
                
                
            })
        
    )  
}

export default DailyActivityChart;