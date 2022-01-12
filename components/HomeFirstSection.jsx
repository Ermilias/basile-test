
import FlagCard from './card/flagCard.jsx';

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_COUNTRIES } from "../GraphQL/countriesFlags/countriesFlagQueries";

const HomeFirstSection = () => {
    const { data, loading } = useQuery(GET_COUNTRIES);
    
    const [countriesData, setCountriesData] = useState([]);

	useEffect(() => {
        if (!loading) {
		    setCountriesData(data.countries.slice(0, 3));
        }
	}, [data, loading]);

    return (
        <div className="" >
            <div className="grid grid-cols-1 gap-4 py-12 px-4 md:grid-cols-2">
                <div className="md:pl-32 pl-5">
                    <h1 className="text-3xl sm:text-5xl text-black font-semibold py-1" >
                        Lorem Ipsum, <br /> Dolor Sit Amet.
                    </h1>
                    <p className="text-left mt-5 text-[#71717A] font-normal md:w-9/12 w-11/12 text-base" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ex nunc, molestie.
                    </p>
                    <button
                        type="button"
                        onClick={() => {}}
                        className="flex flew-row justify-center items-center my-5 bg-[#0045AA] p-3 rounded w-5/12 cursor-pointer"
                    >
                        <p className="text-white font-semibold" >Call to action</p>
                    </button>
                </div>
                <div className="h-full w-full md:w-4/5">
                    <img className="rounded-xl w-full h-full" src="https://images.photowall.com/products/58243/galaxy-1.jpg?h=699&q=85" alt="img" />
                </div>
            </div>
            <div className="flex w-full justify-center items-center px-10 md:px-32 mb-20" >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10" >
                    {countriesData.map((country, index) => (
                        <FlagCard key={index} {...country} />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default HomeFirstSection;