import React from 'react';

import AddCarForm from "./AddCarForm/AddCarForm";
import Cars from "./Cars/Cars";

const CarsContainer = () => {
    return (
        <div>
            <AddCarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export default CarsContainer;