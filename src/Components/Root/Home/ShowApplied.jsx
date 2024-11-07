import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalStorageData } from "../../SetLocalstoreage/Stored";
import Applied from "./Applied";

 
const ShowApplied = () => {
  let applied=useLoaderData();
  let [appliedJobs,setAppliedJobs]=useState([]);
  useEffect(()=>{
    let storedData=getLocalStorageData();
    let exist=applied.filter(job=>storedData.includes(job.id));
    setAppliedJobs(exist); 
  },[])
    return (
        <div>  
            {
                appliedJobs.map(store=><Applied store={store}></Applied>)
            }
          
        </div>
    );
};

export default ShowApplied;