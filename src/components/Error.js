import React from 'react';

const Error = ({ message }) => {
    return <div className="mt-16 bg-orange-200 text-orange-700 ring-1 ring-orange-500 text-center text-md p-2 rounded-md">
        {message}
    </div>;
};

export default Error;
