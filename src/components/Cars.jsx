import React, {useEffect, useState} from 'react';

import {carsService} from "../services/carsServive";
import Car from "./Car";
import CarForm from "./CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carsService.getAll().then(({data}) => setCars(data))
    }, []);
    return (
        <div>
            <CarForm/>
            <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export default Cars;