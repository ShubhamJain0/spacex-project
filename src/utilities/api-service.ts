export class API{
    static getLaunchPads(){
        return fetch('https://api.spacexdata.com/v4/launchpads', {
            method: 'GET',
            headers: {
              'Content-type': 'application/json'
            }
          })
          .then((resp) => resp.json())
    }

    static getLaunchDetails(launchid: any){
        return fetch(`https://api.spacexdata.com/v4/launches/${launchid}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((resp) => resp.json())
    }
}