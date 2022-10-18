import React from "react";
import './DailyAverageSession.css'
import { ResponsiveContainer, LineChart, Line, XAxis, CartesianGrid, Tooltip, YAxis } from "recharts";
import PropTypes from 'prop-types';

/**
 * This components receives userAverageSession, then format it to show the right days and datas
 * @param {Array} userAverageSession
 * @returns {JSX} React Component
 */
const DailyAverageSession = ({userAverageSession}) => {
    // Retrieves datas related to the user sessions
// Converts days to keep only their initials so it matches the mockup
const dayConverter = (day) => {
    switch(day){
        case 1: return 'L';
        case 2: return 'M';
        case 3: return 'M';
        case 4: return 'J';
        case 5: return 'V';
        case 6: return 'S';
        case 7: return 'D';
        default: return '';
    };
}
function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value}min`}</p>
        </div>
      );
    }
  
    return null;
  }
    return(
<div className="container__dailyAverageSession">
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer width="100%" height={200}  >
                {userAverageSession && (

<LineChart
                    data={userAverageSession}
                    margin={{
                        top:80,
                        right:8,
                        left:8,
                        bottom:40
                    }}
                >
                    <CartesianGrid horizontal={false} vertical={false} />
                    <XAxis 
                        dataKey='day' 
                        type="category" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fontSize: 12, fontWeight: 500}} 
                        stroke='rgba(255, 255, 255, 0.5)' 
                        tickMargin={40}
                        tickFormatter={dayConverter} 
                    />
                    <YAxis hide='true' domain={['dataMin', 'dataMax']} />
                    <Tooltip wrapperStyle={{outline: "none"}} content={<CustomTooltip />}  cursor={false} />
                    <Line 
                        dataKey='sessionLength' 
                        type='natural' 
                        stroke='#ffffff' 
                        dot={false} 
                        strokeWidth={2} 
                        />
                </LineChart>
                )}
                
            </ResponsiveContainer>
        </div>
    )
}
DailyAverageSession.propTypes = {
    userActivity : PropTypes.arrayOf(PropTypes.shape({
        day : PropTypes.string,
        sessionLength : PropTypes.number
    })
    )
}

export default DailyAverageSession;