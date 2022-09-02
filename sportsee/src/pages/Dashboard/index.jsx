import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { endpointUserInfos } from "../../utils/endpoints";

const Dashboard = () => {
const [user, setUser] = useState();
let myId = useParams()
let userEndpoint = endpointUserInfos.replace('userId', myId.id)
    
useEffect(() => {
    fetch(userEndpoint)
    .then((res) => res.json())
    .then((res) => {
        setUser(res)
        console.log(user);
    },)

},[])
    return(
        <section>
            <h1>Bonjour <em>{}</em></h1>
        </section>
         
    )
}

export default Dashboard;