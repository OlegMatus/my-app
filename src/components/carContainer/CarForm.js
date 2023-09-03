import React from 'react';
import {useForm} from "react-hook-form";
import {useAppReducer} from "../../hooks/useAppReducer";
import {carService} from "../../services/carService";
import {carActions} from "../../reducers/carReducer";

const CarForm = () => {
    const {
        register,
        reset,
        handleSubmit
    } = useForm();

    const [, dispatch] = useAppReducer(state => state.cars);

    const save = async (car) => {
        await carService.create(car)
        dispatch(carActions.trigger())
        reset()
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>save</button>
        </form>
    );
};

export default CarForm;