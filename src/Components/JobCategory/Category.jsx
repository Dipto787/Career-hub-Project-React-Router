import { useLoaderData } from "react-router-dom";
import ShowCategoryData from "./ShowCategoryData";

 const Category = () => {
    let categoryData=useLoaderData(); 
    
    return (
        <div>
            <h1 className="text-3xl  font-bold text-center">Job Category List</h1>
            <p className="text-center mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
           <div className="grid px-3 lg:px-0  md:grid-cols-4  max-w-6xl mx-auto gap-3 mt-5 mb-8 ">
           {
                categoryData.map(category=><ShowCategoryData category={category}></ShowCategoryData>)
            }
           </div>
        </div>
    );
};

export default Category;