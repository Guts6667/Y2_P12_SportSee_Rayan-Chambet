import React from "react";
import calorieIcon from '../../assets/calories-icon.png';
import carbsIcon from '../../assets/carbs-icon.png';
import lipidIcon from '../../assets/fat-icon.png'
import proteinIcon from '../../assets/protein-icon.png'
import './KeyDatas.css'
import PropTypes from 'prop-types';
const KeyDatas = (datas) => {
    // Retrives and destructures the key datas to distribute them inside the components
    let keyDatas = datas.keyData;
let { calorieCount, carbohydrateCount, lipidCount, proteinCount } = keyDatas;
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

KeyDatas.propTypes = {
    calorieCount : PropTypes.number,
    carbohydrateCount : PropTypes.number,
    lipidCount : PropTypes.number,
    proteinCount : PropTypes.number,
}
KeyDatas.defaultProps = {
    calorieCount : 0,
    carbohydrateCount : 0,
    lipidCount : 0,
    proteinCount : 0,
}
export default KeyDatas;