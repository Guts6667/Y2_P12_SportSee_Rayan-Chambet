import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./DailyActivity.css"
import PropTypes from 'prop-types';

/**
 * Daily Activity receives datas such as dates, kg and calories, then display them
 * @param {Array} userActivity 
 * @returns {JSX} React Component
 */
const DailyActivity = ({userActivity}) => {
    // Retrieves the datas related to the 
    function CustomTooltip({ payload, active }) {
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
            return number
            
    
        }
    
      }
    return (
        <div className="container__activity">
            <div className="container__activity-title">
                <h2>
                    Activité quotidienne
                </h2>
                <ul>
                    <li>
                        <span>Poids (kg)</span>
                    </li>
                    <li>
                        <span>Calories brûlées (kCal)</span>
                    </li>
                </ul>
            </div>
            <div>
                {/* Component Chart daily activity*/}
                <ResponsiveContainer width="100%" height={200} >
                    { userActivity && (
                        <BarChart data={userActivity}  margin={{ top: 20, right: 30, left: 20, bottom: 5 }} >
                        <CartesianGrid  strokeDasharray="2 2" vertical={false}/>
                        <XAxis dataKey="day" tickFormatter={CustomXAxis} tickLine={false}/>
                        <YAxis yAxisId="kilogram" dataKey="kilogram" orientation="right"  axisLine={false} tickLine={false} domain={["dataMin-7", "dataMin+3"]}/>
                        <YAxis yAxisId="calories" dataKey="calories" orientation="left"  axisLine={false}  tickLine={false} hide={true}  domain={[0, "dataMax+30"]}/>
                        <Tooltip wrapperStyle={{outline: "none"}} content={<CustomTooltip />}/>
                        <Bar yAxisId="calories" dataKey="calories"  fill="#282D30"  radius={3} barSize ={7}/>
                        <Bar yAxisId="kilogram"  dataKey="kilogram"fill="#E60000" radius={3} barSize ={7} />
                    </BarChart>
                    )}
            </ResponsiveContainer>
            </div>
        </div>
    )
}

DailyActivity.propTypes = {
    userActivity : PropTypes.arrayOf(PropTypes.shape({
        calories : PropTypes.number,
        day : PropTypes.string,
        kilogram : PropTypes.number
    })
    )
}
export default DailyActivity;