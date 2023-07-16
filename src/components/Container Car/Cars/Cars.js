import React, {useEffect, useState} from 'react';
import Car from "../Car/Car";

const Cars = ({onSet, setOnSet, setUpdateCar}) => {
    const [cars,setCars] = useState([]);
    useEffect(()=>{
        fetch('http://owu.linkpc.net/carsAPI/v1/cars').then(resp=> resp.json()).then(cars => setCars(cars))
    },[onSet])
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setOnSet={setOnSet} setUpdateCar={setUpdateCar}/>)}
        </div>
    );
};

export default Cars;