import { Link } from "react-router-dom";
const Country = ({ country }) => {
    return <div className="mt-16">
        <Link to="/" className="text-gray-500">
            <span className="text-md">
                Home
            </span>
        </Link>
        {country &&
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center gap-6">
                <div className="order-1 md:order-2 text-6xl mt-6 md:mt-0">
                    {country.emoji}
                </div>
                <div className="order-2 md:order-1">
                    <div className="mt-14 flex flex-row items-center gap-4">
                        <h1 className="text-lg md:text-6xl">
                            {country.name}
                        </h1>

                    </div>
                    <div className="my-4 flex flex-row items-center gap-4">
                        <h3 className="text-2xl capitalize">continent:</h3> <p className="text-gray-600 text-md capitalize">{country.continent.name}</p>
                    </div>
                    <div className="my-4 flex flex-row items-center gap-4">
                        <h3 className="text-2xl capitalize">capital:</h3> <p className="text-gray-600 text-md capitalize">{country.capital}</p>
                    </div>
                    <div className="my-4 flex flex-row items-center gap-4">
                        <h3 className="text-2xl capitalize">currency:</h3> <p className="text-gray-600 text-md capitalize">{country.currency}</p>
                    </div>
                    <div className="my-4 flex flex-row items-center gap-4">
                        <h3 className="text-2xl capitalize">languages:</h3> <p className="text-gray-600 text-md capitalize">
                            {country.languages.map(lang => (<span className="bg-teal-300 m-2 px-1 text-teal-700 rounded-full" key={lang.name}>{lang.name}</span>))}
                        </p>
                    </div>
                    <div className="my-4 flex flex-row items-center gap-4">
                        <h3 className="text-2xl capitalize">native:</h3> <p className="text-gray-600 text-md capitalize">{country.native && country.native}</p>
                    </div>
                </div>
            </div>
        }
    </div>;
};

export default Country;
