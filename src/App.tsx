import './App.css';
import { useNavigate } from 'react-router-dom';
import methods from './utilities/methods';

function App() {

  //Handles navigation
  let navigation = useNavigate();
  const Navigate = (id: string) => {
    navigation('/launch-details', {
      state: {
        launchid: id
      }
    })
  }

  return (
    <div className="App">
      <h1 id="heading">Launch Pads</h1>
      <ol>
        {methods.LaunchPads().map((pad: any) => {
          return (
            <li className='launch-div' key={pad.id}>
              <h3>{pad.name}</h3>
              <p>{pad.details}</p>
              <p><strong>Status :</strong> {pad.status}</p>
              <strong><p>Launches: </p></strong>
              <ul>
                {pad.launches.length < 1 ? <p>No Launches Available</p> :
                  pad.launches.slice(0, 3).map((launch: string) => {
                      return <li key={launch} className='link' onClick={() => Navigate(launch)}>{launch}</li>
                    })
                }
              </ul>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default App;
