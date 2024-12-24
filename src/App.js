import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect,useState } from 'react'
import './App.css'

function App() {
  const [datas,setData] = useState()
  useEffect(() =>{
    const fetchData = async () =>{
      try{
        const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc',{
          method: "GET",
          headers:{
            'Content-Type': 'application/json'
          }
        })
        if(!response.ok)
        {
          console.log("Error occured while fetching data")
        }
        const data = await response.json()
        setData(data.results[0])
      }
      catch(error)
      {
        console.log(error)
      }
    }

    fetchData()
  },[])
  console.log(datas)
  return (
    <div className="container p-5 m-5">
     { datas ? <>
      <div className="container p-5 m-5">
  {datas && (
    <div id="card" className="card shadow-sm">
    <div className='row'>
    <div className='col-5 my-4 ms-4'>
        <img src={datas.picture.large}/>
      </div>
      <div className='col-5 my-4 me-4'>
        <h4 className='card-title'>{datas.name.first} {datas.name.last}</h4>
        <p className='my-3'>{datas.gender}</p>
        <p>{datas.cell}</p>
      </div>
    </div>
      
    </div>
  )}
</div>


     </>  : <p>Loadin...</p>

     }
    </div>
  );
}

export default App;
