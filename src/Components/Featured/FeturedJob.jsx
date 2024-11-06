import { useEffect, useState } from "react";
import ShowFeatureData from "./ShowFeatureData";

 
const FeturedJob = () => {
    let [featureCard,setFeatureCard]=useState([]);
    let [showAll,setShowAll]=useState(4);
    useEffect(()=>{
        fetch('/src/assets/jobs.json')
        .then(res=>res.json())
        .then(data=>setFeatureCard(data))
    },[])
    return (
        <div className="max-w-6xl mx-auto ">
            <h2 className="text-6xl font-semibold text-center">Featured Jobs</h2>
            <p className="text-center mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid md:grid-cols-2 gap-5 mt-5 px-2">
                {
                    featureCard.slice(0,showAll).map(featureData=><ShowFeatureData featureData={featureData}></ShowFeatureData>)
                }
            </div>
            <div className={`${showAll===featureCard.length?'hidden':''}`}>
            <button onClick={()=>setShowAll(featureCard.length)} className="btn text-white font-bold h-10 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeturedJob;