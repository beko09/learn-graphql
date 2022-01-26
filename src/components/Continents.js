import { useQuery } from '@apollo/client';
import { GET_ALL_CONTINENTS } from "../querys/Querys";
import BoxCountry from './BoxCountry';
import Loading from './Loading';
import Error from "./Error"



const Continents = () => {

    const { data, error, loading } = useQuery(GET_ALL_CONTINENTS)
    if (loading || error) {
        return <div className="mx-auto flex justify-center align-center">{error ? <Error message={error.message} /> : <Loading />}</div>
    }
    return <div >
        {
            data ? data.continents.map(continent => (
                <div className="relative overflow-hidden mt-12" key={continent.code}>
                    <div className="" >
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row items-center gap-2">
                                <div>
                                    <span className="text-sm bg-teal-300 text-teal-800 rounded-full px-2 py-1 md:py-0 ">continent</span>
                                </div>
                                <h1 className=" text-center text-lg">{continent.name}</h1>
                            </div>
                            <div className="flex flex-row align-items-center gap-4">
                                <span className="text-sm text-gray-400">Number of countries </span>
                                <h4>{continent.countries.length}</h4>
                                <span>Country</span>
                            </div>
                        </div>
                    </div>
                    <BoxCountry countries={continent.countries} />
                </div>
            )) :
                <div className="animate-spin">
                    test
                </div>
        }


    </div>;
};

export default Continents;
