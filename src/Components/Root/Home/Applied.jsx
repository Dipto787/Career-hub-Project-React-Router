
const Applied = ({ store }) => {
    let {company_name,job_title,job_type,location,logo,remote_or_onsite}=store;
    console.log(store)
    return (
        <div className="px-2">
            <div className="card card-side flex md:flex-row  flex-col items-center border p-5 gap-5 mt-8    max-w-6xl mx-auto">
                <figure className="bg-[#F4F4F4] py-16 px-12 rounded">
                    <img width='300'
                        src={logo}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="border mr-5 border-[#7E90FE] text-[#7E90FE] font-bold rounded px-5 py-2">{remote_or_onsite}</button>
                        <button className="border  border-[#7E90FE] text-[#7E90FE] font-bold rounded px-5 py-2">{job_type}</button>
                    </div>
                </div>
                    <div className="card-actions justify-end">
                    <button className="btn text-white font-bold h-10 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
                    </div>
            </div>
        </div>
    );
};

export default Applied;