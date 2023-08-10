// import React, {useState} from 'react';
// import {useDispatch} from "react-redux";
//
// const AddCarForm = () => {
//     const dispatch = useDispatch();
//     const [brand, setBrand] = useState();
//
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (name && brand && year) {
//             dispatch(addCar({brand, year}));
//             setBrand('');
//             setYear('');
//         }
//     };
// }
//
// return (
//     <div>
//         <h2>Add Car</h2>
//         <form onSubmit={handleSubmit}>
//             <label> brand: <input type="text" /></label>
//         </form>
//     </div>
// );
// }
// ;
//
// export default AddCarForm;