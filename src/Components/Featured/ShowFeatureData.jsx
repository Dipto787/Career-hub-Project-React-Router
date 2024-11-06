import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { NavLink } from "react-router-dom";
const ShowFeatureData = ({ featureData }) => {
    let { job_title, company_name, educational_requirements, job_type, location, logo, remote_or_onsite, salary,id } = featureData; 
    return (
        <div>
            <div className="card card-compact  p-8 space-y-5  border-2">
                <figure>
                    <img
                        src={logo}
                        alt="Shoes" />
                </figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="border mr-5 border-[#7E90FE] text-[#7E90FE] font-bold rounded px-5 py-2">{remote_or_onsite}</button>
                        <button className="border  border-[#7E90FE] text-[#7E90FE] font-bold rounded px-5 py-2">{job_type}</button>
                    </div>
                    <div className="flex">
                        <div className="flex mr-5 gap-1 items-center"><CiLocationOn className="text-2xl font-bold" /> {location} </div>

                        <div className="flex gap-1 items-center"><CiDollar className="text-2xl font-bold" /> {salary} </div>
                         
                    </div>
                    <div className="card-actions  ">
                       <NavLink to={`/applied/${id}`}>
                       <button className="btn text-white font-bold h-10 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
                       </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowFeatureData;