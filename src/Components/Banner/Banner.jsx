
const Banner = () => {
    return (
        <div className="bg-[#F9F9FF]">
            <div className="max-w-6xl px-6 md:flex items-center py-24 mx-auto">

                <div className="space-y-8">
                    <h1 className="lg:text-7xl text-4xl lg:w-4/5  font-semibold">One Step Closer To Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="text-white px-7 rounded-xl font-bold h-14 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Get Started</button>
                </div>

                <div>
            <img className="w-[100%]" src="/src/assets/user.png" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;