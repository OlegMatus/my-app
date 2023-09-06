import React from 'react';
import {FC, PropsWithChildren} from 'react';
import {ICar} from "../interfaces/carInterface";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand, year} = car;
    const navigate = useNavigate();
    return (
        <div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <button onClick={() => navigate(id.toString(), {state: car})}>details</button>
        </div>
    );
};

export {Car};