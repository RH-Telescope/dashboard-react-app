import Header from './components/Header';
import Header2 from './components/Header2';
import FeatureBoxCollection from './components/FeatureBoxCollection';
import './components/Dashboard.css';
import './App.css';
import { useEffect, useState } from 'react';
import data from "./local-json/data.json";

function App() {
  {/*
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('../public/data.json'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
    )
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      setData(myJson)
    });
  }
  useEffect(() =>{
    getData()
  },[])
*/}


  const [usersData, setUsersState] = useState(data);
  return (
    <div id="page-container">
    <Header/>
    <FeatureBoxCollection/>
    {/*}
    <div className='="App'>
      {
        data && data.length>0 && data.map((item)=><p>(item.about}</p>)
      }
    </div>
    */}
    <div className="healthSizingTopRow">
      {data && data.map(({ url, id}) =>(
        <div key={id} className="row">
          <h1>Test Query From static .json</h1>
          <strong>{url}</strong>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
