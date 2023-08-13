import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {carsActions} from "../../../reduxCore";

const AddCarForm = () => {
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);
    const {
        register,
        reset,
        setValue,
        handleSubmit
    } = useForm();

    if (carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }

    const save = async (car) => {
        await dispatch(carsActions.create(car))
        reset()
    }

    const update = async (car) => {
        await dispatch(carsActions.update(carForUpdate.id, car))
        reset()
    }
    return (
        <div>
            <h2>Add Car</h2>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <label> <input type="text" placeholder={'brand'} {...register('brand')}/></label>
                <label> <input type="number" placeholder={'price'} {...register('price')}/></label>
                <label> <input type="number" placeholder={'year'} {...register('year')}/></label>
                <button>{carForUpdate ? 'update' : 'save'}</button>
            </form>
        </div>
    );
}

export default AddCarForm;