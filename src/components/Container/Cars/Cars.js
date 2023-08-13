import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import Car from "../Car/Car";
import css from './Cars.module.css'
import {carsActions} from "../../../reduxCore";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(store => store.cars);

    useEffect(() => {
        dispatch(carsActions.getCars())
    }, [dispatch]);

    return (
        <div className={css.Cars}>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;