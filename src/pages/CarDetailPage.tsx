import React from 'react';

import {ICar} from "../interfaces/carInterface";
import {useAppLocation} from "../hooks/useAppLocation";

const CarDetailPage = () => {
    let {state: {id, brand, price, year}} = useAppLocation<ICar>();
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export {CarDetailPage};