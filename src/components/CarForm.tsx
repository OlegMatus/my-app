import React, {Dispatch, FC, SetStateAction} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../interfaces/carInterface";
import {carService} from "../services/carService";

interface IProps {
    setTrigger: Dispatch<SetStateAction<boolean>>
}

const CarForm: FC<IProps> = ({setTrigger}) => {
    let {
        register,
        handleSubmit,
        reset
    } = useForm<ICar>();


    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        setTrigger(prevState => !prevState)
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

export {CarForm};