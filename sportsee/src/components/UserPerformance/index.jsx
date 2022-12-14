import React from "react";
import './UserPerformance.css'
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import PropTypes from 'prop-types';
/**
 * This Component renders the datas related to the user performance
 * @param {Object} userAveragePerformance 
 * @returns {JSX} React Component
 */
const UserPerformance = ({userAveragePerformance}) => {
    // Retrieves data related to the user performances
    const dataPerformance = userAveragePerformance;
    const data = dataPerformance.data;
    // const kind = dataPerformance.kind

    // this function reverses the order of the array containing the types of performances to match the mockup
    function reverseData  (array)  {
        const dataReversedArray = []
        for(let i=array.length - 1; i >= 0; i --){
            dataReversedArray.push(array[i])
        }
        return dataReversedArray
    }
    
    const dataReversed = reverseData(data)

    const kindConverter = (kind) => {
        
        switch (kind){
            case 1: return 'Cardio';
            case 2: return 'Energie';
            case 3: return 'Endurance';
            case 4: return 'Force';
            case 5: return 'Vitesse';
            case 6: return 'Intensité';
            default: return null;
        }
    }
    return(
        <div className="container__userPerformance">
            {userAveragePerformance && (
                <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataReversed} >
                <PolarGrid  radialLines={false} />
                <PolarAngleAxis dataKey='kind' 
                    tickLine={false} 
                    tick={{ fontSize: 12, fontWeight: 500 }} 
                    stroke="#FFFFFF" 
                    tickFormatter={kindConverter}/>
                <PolarRadiusAxis  axisLine={false} tick={false}/>
                <Radar name="Mike" dataKey="value"  fill="#FF0101B2"   />
                </RadarChart>
            </ResponsiveContainer>
            )}
        </div>
    )
}

UserPerformance.propTypes = {
    data : PropTypes.shape({
        dataScorePercentage : PropTypes.number,
        dataTodayScorePercentage : PropTypes.number,
        score : PropTypes.number || PropTypes.undefined,
        todayScore : PropTypes.number || PropTypes.undefined,
        todayScoreDatas : PropTypes.number
    }),
    kind : PropTypes.shape({
        1 : PropTypes.string,
        2 : PropTypes.string,
        3 : PropTypes.string,
        4 : PropTypes.string,
        5 : PropTypes.string,
        6 : PropTypes.string,
    })
} 

    





    

export default UserPerformance;