import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalStorageData } from "../../SetLocalstoreage/Stored";
import Applied from "./Applied";

 
const ShowApplied = () => {
  let applied=useLoaderData();
  let [displayData,setDisplayData]=useState([]);
  let [appliedJobs,setAppliedJobs]=useState([]);
  let handleFilter=filter=>{
    if(filter==='All'){
        setAppliedJobs(displayData)
    }
    else if(filter==='Remote'){
        let remote=displayData.filter(e=>e.remote_or_onsite==='Remote');
        setAppliedJobs(remote)
    }
    else if(filter==='Onsite'){
        let remote=displayData.filter(e=>e.remote_or_onsite==='Onsite');
        setAppliedJobs(remote)
    }
  }
  useEffect(()=>{
    let storedData=getLocalStorageData();
    let exist=applied.filter(job=>storedData.includes(job.id));
    setAppliedJobs(exist); 
    setDisplayData(exist);
  },[])


    return (
        <div className="">  
            <details className="dropdown ">
  <summary className="btn m-1">filter</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>handleFilter('All')}><a>All</a></li>
    <li onClick={()=>handleFilter('Remote')}><a>Remote</a></li>
    <li onClick={()=>handleFilter('Onsite')}><a>Onsite</a></li>
  </ul>
</details>
            {
                appliedJobs.map(store=><Applied store={store}></Applied>)
            }
          
        </div>
    );
};

export default ShowApplied;