import { Link } from "react-router-dom";

const BoxCountry = ({ countries }) => {
    return <div className="flex flex-row gap-4  w-full snap-mandatory overflow-x-auto snap-x my-12 py-2">
        {
            countries.map(country => {
                return (
                    <Link to={`/country/${country.code}`} key={country.code} className="bg-gray-200 ring-2 ring-gray-300 shadow-md mb-4 px-4 py-2 rounded-lg snap-always  snap-center mx-4 hover:ring-1 hover:bg-white hover:shadow-lg transition-all flex flex-col items-stretch justify-evenly">
                        <div className="flex flex-row justify-start items-end gap-2 ">
                            <h1 className="text-lg">{country.name}</h1>
                            <span className="text-sm">{country.emoji}</span>
                        </div>
                        {country.capital && <div className="flex flex-row gap-2 items-center ">
                            <h2 className="text-md uppercase">capital</h2>
                            <h6 className="text-sm text-gray-600">{country.capital}</h6>
                        </div>}
                    </Link>
                )
            })
        }
    </div>;
};

export default BoxCountry;
