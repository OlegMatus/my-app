// http://owu.linkpc.net/carsAPI/v1/doc
//     Реалізувати створення, видалення та оновлення машин
import React, {useState} from 'react';
import CarForm from "./CarForm/CarForm";
import Cars from "./Cars/Cars";

const ContainerCar = () => {
    const [onSet, setOnSet] = useState(null);
    const [updateCar, setUpdateCar] = useState(null);
    return (
        <div>
            Car Form:
            <CarForm setOnSet={setOnSet} updateCar={updateCar} setUpdateCar={setUpdateCar}/>
            <hr/>
            <Cars onSet={onSet} setOnSet={setOnSet} setUpdateCar={setUpdateCar}/>
        </div>
    );
};

export default ContainerCar;