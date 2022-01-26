import React from 'react';
import * as components from "../components/index";
const Home = () => {
    return <>
        <div className="mt-[100px] mb-16 text-center ">
            <h1 className="font-mono font-semibold text-lg md:text-2xl">Learn More About continents & countries</h1>
        </div>
        <components.Search />
        <components.Continents />
    </>;
};

export default Home;
