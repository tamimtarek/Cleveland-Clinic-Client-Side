
import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {

    const allData = useLoaderData();
   const {id} = useParams();
   const serviceDetails = allData.find(data => data.id === id);
   console.log(serviceDetails);
   const { serviceName, serviceArea, description, imageUrl, price, processing_time, rating, stockStatus, subcategory, username } = serviceDetails;

    return (
        
<div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90">
    <a href="#" className="block w-full h-full">
        <img alt="blog photo" src={imageUrl} className="object-cover w-full max-h-40"/>
        <div className="w-full p-4 bg-white dark:bg-gray-800">
            <p className="font-medium text-indigo-500 text-md">
                {serviceArea}
            </p>
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                {serviceName}
            </p>
            <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                {description}
            </p>
            <div className="flex items-center mt-4">
                <a href="#" className="relative block">
                    <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 "/>
                </a>
                <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-gray-800 dark:text-white">
                        Jean Jacques
                    </p>
                    <p className="text-gray-400 dark:text-gray-300">
                        20 mars 2029 - 6 min read
                    </p>
                </div>
            </div>
        </div>
    </a>
</div>

    );
};

export default CardDetails;