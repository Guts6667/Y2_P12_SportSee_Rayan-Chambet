import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { endpointUserInfos } from "../../utils/endpoints";
import './Dashboard.css'

const Dashboard = () => {
const [loadingState, setLoadingState] = useState(false)
const [user, setUserDatas] = useState({});
let myId = useParams()
let userEndpoint = endpointUserInfos.replace('userId', myId.id)

const fetchDatas = () => {
    setLoadingState(false)
    fetch(userEndpoint)
    .then((res) => res.json())
    .then((res) => {
        setUserDatas(res.data)
        setLoadingState(true)
    })
    .catch((error) =>{
        console.log(error)
        setLoadingState(false)
    } )
};

useEffect(() => {

    fetchDatas()
}, [])

return(
    loadingState ? (
        <section className = 'section___dashboard'>
            <h1>Bonjour <strong>{user.userInfos.firstName}</strong></h1>
        </section>
    ) : (
        <section className = "section___dashboard">
            <h1>Veuillez patienter</h1>
        </section>
    )
)
    
}

export default Dashboard;