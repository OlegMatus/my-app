import {carService} from "../../services";

const carsActionsTypes = {
    SET: 'GET',
    SET_CAR_FOR_UPDATE: 'SET_CAR_FOR_UPDATE'

};

const actions = {
    set: (payload) => ({type: carsActionsTypes.SET, payload}),
    setCarForUpdate: (payload) => ({type: carsActionsTypes.SET_CAR_FOR_UPDATE, payload})
};

const getCars = () => (dispatch) => {
    carService.getAll(dispatch).then(({data}) => {
        dispatch(actions.set(data))
    })
};

const create = (car) => async (dispatch) => {
    await carService.create(car)
    await dispatch(getCars())
};

const update = (id, car) => async (dispatch) => {
    await carService.updateById(id, car)
    dispatch(actions.setCarForUpdate(null))
    await dispatch(getCars())
}
const deleteCar = (id) => async (dispatch) => {
    await carService.deleteById(id)
    await dispatch(getCars())
};

const carsActions = {
    getCars,
    create,
    update,
    deleteCar,
    setCarForUpdate: actions.setCarForUpdate
}

export {
    carsActions,
    carsActionsTypes,
}