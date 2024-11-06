 const ShowCategoryData = ({category}) => { 
    return (
        <div>
            <div className="bg-[#F9F9FF] p-8 rounded-xl ">
                <div className="bg-[#EFECFF] w-14 px-3 py-2 rounded"><img src={category.logo} alt="" /></div>
                <div className="mt-5">
                    <h3 className="text-2xl font-bold">{category.category_name}</h3>
                    <p>{category.availability}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowCategoryData;