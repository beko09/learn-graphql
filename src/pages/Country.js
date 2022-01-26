import { useParams } from "react-router-dom";
import { GET_COUNTRY } from "../querys/Querys";
import { useQuery } from "@apollo/client";
import * as components from "../components/index";

const Country = () => {
    let { country_code } = useParams();
    const { data, error, loading } = useQuery(GET_COUNTRY, {
        variables: {
            code: country_code
        }
    });
    if (loading || error) {
        console.log(error)
        return <div className="mx-auto flex justify-center items-center">{error ? <components.Error message={error.message} /> : <components.Loading />}</div>
    }
    const { country } = data
    return <components.Country country={country} />;
};

export default Country;
