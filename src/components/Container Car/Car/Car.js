import React from 'react';
const Car = ({car,setOnSet, setUpdateCar}) => {
    const {id, brand, price, year} = car;



    const DeleteCar = () => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
            method: 'DELETE'
        }).then(resp=> {
            setOnSet(prev=>!prev)
            if (resp.ok) {
                console.log('Машина успішно видалена')
            }
            return resp.json()
        })
            .catch((error) => {
                console.log("ERROR: ", error);
            })
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>update</button>
            <button onClick={DeleteCar}>delete</button>
        </div>
    );
};

export default Car;