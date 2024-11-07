import { useLoaderData, useParams } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import { SlCalender } from "react-icons/sl";
import Bg from "../Bg";
import { CiDollar } from "react-icons/ci";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getLocalStorageData, setDataOnLocalStorage } from "../SetLocalstoreage/Stored";
import { useEffect, useState } from "react";
import ShowApplied from "../Root/Home/ShowApplied";

 const AppliedJobs = () => {
    const detailsData=useLoaderData();
    let params=useParams();
    let idInt=parseInt(params.id);
    let exist=detailsData.find(detailId=>detailId.id===idInt);
    let {job_description,job_responsibility,educational_requirements,experiences,salary,job_title,contact_information}=exist; 
    let handleToast=()=>{
        setDataOnLocalStorage(idInt);
        toast('You Have Success fully!!!');
    }

 

    return (
        <div className="">
            <Bg></Bg>
         <div className="max-w-6xl mx-auto">
         <div className="grid md:grid-cols-3 mt-8 gap-4">
            <div className=" col-span-2">
                <p><span className="text-xl font-bold">Job Description:</span> {job_description} </p>

                <p className="mt-8"><span className="text-xl  font-bold">Job Responsibility:</span> {job_responsibility} </p>

                <h4 className="text-xl mt-5 mb-5 font-bold">Educational Requirements:</h4>
                <p>{educational_requirements}</p>


 

                <h4 className="text-xl mt-5 mb-5 font-bold">Experiences:</h4>
                <p>{experiences}</p>
            </div>

            <div className=" ">
         <div className="bg-[#F3F3FF]   px-4 p-2" >
         <h3 className="text-xl mb-3 font-bold">Job Details</h3>
                <hr /><hr />
                <div className="flex mt-4"><CiDollar className="text-2xl mr-3" /> <span className="font-bold">Salary :</span> {salary} (Per Month) </div>

                <div className="flex mt-3"><SlCalender className="text-2xl mr-3" /> <span className="font-bold">Job Title :</span> {job_title} </div>

                <h1 className="font-bold mb-4 mt-8">Contact Information</h1>
                <hr /><hr />

                <div className="mt-4"> 
                <div className="flex mt-3"><FaPhoneAlt className="text-2xl mr-3" /> <span className="font-bold">Phone : </span>  { contact_information.phone} </div>


                <div className="flex mt-3"><MdOutlineMailOutline className="text-2xl mr-3" /> <span className="font-bold"> Email :</span>  { contact_information.email} </div>

                <div className="flex flex-wra mt-3"><CiLocationOn className="text-2xl mr-3" /><span className="font-bold">Address:</span>  { contact_information.address
} </div>


                </div>
         </div>

    <button onClick={handleToast} className="btn mt-5 text-white w-full font-bold  bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Apply Now</button>
            </div>

            <ToastContainer></ToastContainer>
                       

          </div>
         </div>
        </div>
    );
};

export default AppliedJobs;