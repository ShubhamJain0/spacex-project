import { useState } from 'react';
import { API } from './api-service';

//Loads launchpads
function LaunchPads(){
    const [launchPads, setLaunchPads] = useState([]);
    async function fetchData(){
        const data = await API.getLaunchPads().catch((err) => console.log(err));
        setLaunchPads(data);
    }
    fetchData();
    return launchPads;
}


//Gets launch details
function LoadLaunchDetails(launchID: any){
    const [launchDetails, setLaunchDetails] = useState({});
    async function fetchData(){
        const data = await API.getLaunchDetails(launchID).catch((err) => console.log(err));
        setLaunchDetails(data);
    }
    fetchData();
    return launchDetails;
}



var methods = {LaunchPads, LoadLaunchDetails}

export default methods;