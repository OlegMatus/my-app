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
import React from 'react';
import {useForm} from "react-hook-form";


const CarForm = ({setOnSet}) => {
    const {register, handleSubmit, reset} = useForm();
    const onCreate = (car) =>{
      fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
          method: 'Post',
          headers: {'content-type':'application/json'},
          body:JSON.stringify(car)
      }).then((resp)=> {
          if (resp.ok) {
              console.log('Машина успішно створена')
          }
          return resp.json()
      })
          .then(() => {
              setOnSet(prev=>!prev);
              reset();
          })
      .catch((error) => {
            console.log("ERROR: ", error);
          })
    }


    const updateCar = (carId, updateData) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(resp=> {
                if (!resp.ok) {
                    throw new Error('error')
                }
                return resp.json()
            })
            .then(updatedData => {
            console.log('Data updated:', updatedData);
        })
            .catch((error) => {
            console.log("ERROR: ", error);
        })
    }

    const DeleteCar = (carId) => {
fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carId}`, {
    method: 'DELETE'
}).then(resp=> {
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
        <>
        <form onSubmit={handleSubmit(onCreate)}>
            <label><input type="text" placeholder={'brand'} {...register('brand')}/></label>
            <label><input type="number" placeholder={'price'} {...register('price')}/></label>
            <label><input type="number" placeholder={'year'} {...register('year')}/></label>
            <button>Save</button>
        </form>
            <button onSubmit={handleSubmit((data) => updateCar(4924, data))}>Update</button>
            <button onClick={() => DeleteCar(4945)}>Delete</button>

        </>
    );
};

export default CarForm;