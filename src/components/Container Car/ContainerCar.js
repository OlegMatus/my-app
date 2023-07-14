// http://owu.linkpc.net/carsAPI/v1/doc
//     Реалізувати створення, видалення та оновлення машин
import React, {useState} from 'react';
import CarForm from "./CarForm/CarForm";
import Cars from "./Cars/Cars";

const ContainerCar = () => {
    const [onSet, setOnSet] = useState(null);
    return (
        <div>
            Car Form:
            <CarForm setOnSet={setOnSet}/>
            <hr/>
            <Cars onSet={onSet}/>
        </div>
    );
};

export default ContainerCar;