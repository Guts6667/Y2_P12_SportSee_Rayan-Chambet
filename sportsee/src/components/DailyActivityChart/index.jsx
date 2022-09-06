import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './DailyActivityChart.css'

const DailyActivityChart = (userActivity) => {
const {userId, sessions} = userActivity.sessions.sessions;
console.log(userId, sessions);
function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}Kcal`}</p>
          <p className="label">{` ${payload[1].value}kg`}</p>
        </div>
      );
    }
  
    return null;
  }

  const CustomXAxis = (tick) =>{
    if(tick){
        let number = tick.split("-").pop();
        number = number.slice(1)
        // Retirer les zéros
        return number
        

    }

  }

    return(
            <ResponsiveContainer width="100%" height={300} >
<BarChart data={sessions}  margin={{ top: 20, right: 30, left: 20, bottom: 5 }} >
      <CartesianGrid  strokeDasharray="2 2" vertical={false}/>
      <XAxis dataKey="day" tickFormatter={CustomXAxis} tickLine={false}/>
      <YAxis yAxisId="kilogram" dataKey="kilogram" orientation="right"  axisLine={false} tickLine={false} domain={["dataMin-7", "dataMin+3"]}/>
      <YAxis yAxisId="calories" dataKey="calories" orientation="left"  axisLine={false}  tickLine={false} hide={true}  domain={[0, "dataMax+30"]}/>
      <Tooltip content={<CustomTooltip />}/>
      <Bar yAxisId="calories" dataKey="calories"  fill="#282D30"  radius={3} barSize ={7}/>
      <Bar yAxisId="kilogram"  dataKey="kilogram"fill="#E60000" radius={3} barSize ={7} />
    </BarChart>
            </ResponsiveContainer>
    
                 
    )  
}

export default DailyActivityChart;