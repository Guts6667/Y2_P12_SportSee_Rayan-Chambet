import { createContext, useState } from "react";
import { urlApiDatas } from "../const/urlApiDatas";
import { urlMockedDatas } from "../const/urlMockedDatas";
import PropTypes from 'prop-types';


export const DataTypeContext = createContext();


export const DataTypeProvider = ({ children }) => {
    const [dataType, setDataType] = useState(urlMockedDatas)
    const toggleDataType = () => {
        setDataType(dataType === urlMockedDatas ? urlApiDatas : urlMockedDatas)
        console.log(dataType);
    }
 
    return (
        <DataTypeContext.Provider value={{ dataType, toggleDataType }}>
            {children}
        </DataTypeContext.Provider>
    )
}


DataTypeProvider.propTypes = {
    urlMockedDatas : PropTypes.string,
    urlApiDatas : PropTypes.string,
    dataType : PropTypes.string
}