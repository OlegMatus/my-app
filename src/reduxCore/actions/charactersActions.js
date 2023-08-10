const charactersActionsTypes = {
    SET: 'SET'
}
const charactersActions = {
    set: (payload) => ({type: charactersActionsTypes.SET, payload})
}
export {
    charactersActions,
    charactersActionsTypes
}