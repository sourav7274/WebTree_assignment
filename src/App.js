import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect,useState } from 'react'

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
    <div className="card shadow-sm">
      <div className="row g-0 align-items-center me-5">
        <div className="col-4 me-5">
          <img
            src={datas.picture.large}
            className="img-fluid rounded-start m-3 p-3"
            alt="User"
            style={{ objectFit: "cover", width: "100%", maxHeight: "300px" }}
          />
        </div>
        <div className="col-4">
          <div className="card-body mt-3">
            <h5 className="card-title mb-3">
              {datas.name.first} {datas.name.last}
            </h5>
            <p className="card-text">
              <strong>Gender:</strong> {datas.gender}
            </p>
            <p className="card-text">
              <strong>Cell:</strong> {datas.cell}
            </p>
          </div>
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
