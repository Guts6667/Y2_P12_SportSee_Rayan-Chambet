import React from "react";
import DailyActivityChart from "../DailyActivityChart";
import "./DailyActivity.css"

const DailyActivity = (userActivity) => {

    return (
        <div className="container__activity">
            <div className="container__activity-title">
                <span>
                    Activité quotidienne
                </span>
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
                {/* Insert Chart here*/}
                <DailyActivityChart  sessions = {userActivity} />
            </div>
        </div>
    )
}

export default DailyActivity;