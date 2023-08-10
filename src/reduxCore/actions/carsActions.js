import {carService} from "../../services";

const carsActionsTypes = {
    SET:'GET',
    // ADD:'ADD',
    DELETE:'DELETE',
};

const carsActions = {
    set: (payload) => ({type: carsActionsTypes.SET, payload}),
    delete: (payload) => ({type: carsActionsTypes.DELETE, payload}),
};

const getCars = () => (dispatch) => {
    carService.getAll(dispatch).then(({data}) => {dispatch(carsActions.set(data))})
};
// const addCars = () => (dispatch) => {
//     carService.getAll(dispatch).then(({data}) => {dispatch(carsActions.set(data))})
// };
const deleteCar = (id) => (dispatch) => {
    carService.deleteById(id).then(({data}) => {dispatch(carsActions.delete(id))})
};

export {
    carsActions,
    carsActionsTypes,
    getCars,
    deleteCar
    // addCars
}