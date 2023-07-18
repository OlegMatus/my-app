// import React, {useState} from 'react';
// // import ContainerCar from "../ContainerCar";
// const CarForm = ({setOnSet}) => {
//     const initState={
//         brand:'',
//         price:'',
//         year:''
//     }
//     const [car, setCar] = useState(initState);
//
//
//     const inputChange = (e) => {
// setCar(prev =>({...prev, [e.target.name]: e.target.value}))
//     };
// const save = (e) => {
//     e.preventDefault()
//     fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
//         method: 'POST',
//         headers: {'content-type': 'application/json'},
//         body: JSON.stringify(car)
//     }).then(resp => resp.json()).then(() => {
//         setOnSet(prev => !prev)
//         setCar(initState)
//     })
// }
//     return (
//         <form onSubmit={save}>
//             <div><label><input type="text" value={car.brand} name={'brand'} onChange={inputChange}/></label></div>
//             <div><label><input type="number" value={car.price} name={'price'} onChange={inputChange}/></label></div>
//             <div><label><input type="number" value={car.year} name={'year'} onChange={inputChange}/></label></div>
//             <button>Save</button>
//         </form>
//     );
// };
//
// export default CarForm;
import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../../validators/carValidator";
import {required} from "joi";


const CarForm = ({setOnSet, updateCar, setUpdateCar}) => {
    const {register, handleSubmit, reset,
        formState: {errors,isValid},
        setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand.s)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [updateCar])
    const onCreate = (car) => {
        console.log(car)
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'Post',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(car)
        }).then((resp) => {
            if (resp.ok) {
                console.log('Машина успішно створена')
            }
            return resp.json()
        })
            .then(() => {
                setOnSet(prev => !prev);
                reset();
            })
            .catch((error) => {
                console.log("ERROR: ", error);
            })
    }

    const updatesCar = (car) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${updateCar.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then(resp => resp.json()).then(() => {
            setOnSet(prev => !prev);
            setUpdateCar(null);
            reset();
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit(!updateCar ? onCreate : updatesCar)}>
                <label><input type="text" placeholder={'brand'} {...register('brand',{
                    // required:true
                })}/></label>
                {errors.brand && <span>{errors.brand.message}</span>}
                <label><input type="number" placeholder={'price'} {...register('price', {
                    valueAsNumber:true,
                    // required:true,
                    // min: {value:0,message: 'price must be gte 0'},
                    // max:{value:10000000, message:'price must be lte 10000000'}
                    })}/></label>
                {errors.price && <span>{errors.price.message}</span>}
                <label><input type="number" placeholder={'year'} {...register('year' , {
                    valueAsNumber:true,
                //     required:true,
                // min:{value:1990,message:'year must be gte 1990'},
                // max:{value:new Date().getFullYear(), message: `year must be lte ${new Date().getFullYear()}`}
                })}/></label>
                {errors.year && <span>{errors.year.message}</span>}year
                <button disabled={!isValid}>{!updateCar?'Save':'Update'}</button>
            </form>
        </>
    );
};

export default CarForm;