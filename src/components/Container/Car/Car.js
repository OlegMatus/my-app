import React from 'react';

import css from './Car.module.css'

import {useDispatch} from "react-redux";
import {carsActions} from "../../../reduxCore";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();
    return (
        <div className={css.Car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carsActions.setCarForUpdate(car))}>update</button>
            <button onClick={() => dispatch(carsActions.deleteCar(id))}>delete</button>
        </div>
    );
};

export default Car;