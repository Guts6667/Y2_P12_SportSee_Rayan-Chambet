import React from "react";
import calorieIcon from '../../assets/calories-icon.png';
import carbsIcon from '../../assets/carbs-icon.png';
import lipidIcon from '../../assets/fat-icon.png'
import proteinIcon from '../../assets/protein-icon.png'
import './KeyDatas.css'
const KeyDatas = (datas) => {
console.log(datas);
let { calorieCount, carbohydrateCount, lipidCount, proteinCount } = datas.keyData;
console.log(calorieCount);
    return (
    <div className="container__keyDatas">
        <div className="container__keyDatas-card">
            <div>
                <img src={calorieIcon} alt="Calories" />
            </div>
            <div className="container__keyDatas-infos">
                <span className="count">{`${calorieCount}kCal`}</span>
                <span className="scale">Calories</span>
            </div>
        </div>
        <div className="container__keyDatas-card">
            <div>
                <img src={proteinIcon} alt="Proteines" />
            </div>
            <div className="container__keyDatas-infos">
                <span className="count">{`${proteinCount}g`}</span>
                <span className="scale">Proteines</span>
            </div>
        </div>
        <div className="container__keyDatas-card">
            <div>
                <img src={carbsIcon} alt="Glucides" />
            </div>
            <div className="container__keyDatas-infos">
                <span className="count">{`${carbohydrateCount}g`}</span>
                <span className="scale">Glucides</span>
            </div>
        </div>
        <div className="container__keyDatas-card">
            <div>
                <img src={lipidIcon} alt="Lipides" />
            </div>
            <div className="container__keyDatas-infos">
                <span className="count">{`${lipidCount}g`}</span>
                <span className="scale">Lipides</span>
            </div>
        </div>
    </div>
    )
}
export default KeyDatas;