import React from 'react';
import {useForm} from "react-hook-form";
// import {carsService} from "../services/carsServive";

const CarForm = () => {
    const {
        reset,
        register,
        handleSubmit,
        setValue,
        formState: {errors, isValid}
    } = useForm();

    const save = (car) => {
      // carsService.create().then()
        console.log(car);
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <div><input type="text" placeholder={'brand'} {...register('brand')}/></div>
            <div><input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/></div>
            <div><input type="number" placeholder={'year'} {...register('year')}/></div>
            <button >save</button>
        </form>
    );
};

export default CarForm;