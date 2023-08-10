import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {deleteCar, getCars} from "../../../reduxCore";
import Car from "../Car/Car";

const Cars = () => {
    const dispatch = useDispatch();
    const{cars} = useSelector(store => store.cars);

    useEffect(() => {
        dispatch(getCars())

        }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteCar(id));
    };



    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} handleDelete={handleDelete}/>)}
        </div>
    );
};

export default Cars;