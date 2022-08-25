import { useLocation } from 'react-router-dom';
import methods from '../utilities/methods';
import '../App.css';

function LaunchDetails(params: any){

    const location: any = useLocation();
    const details: any = methods.LoadLaunchDetails(location.state.launchid);

    return (
        <div className='App'>
            <h3>{details.name}</h3>
            <p>{details.details}</p>
            <p><strong>Launch Date: </strong>{details && new Date(details.date_utc).toLocaleString() as any}</p>
        </div>
    )
}

export default LaunchDetails;