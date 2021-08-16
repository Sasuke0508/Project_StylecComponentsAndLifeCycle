import {ADD_USER, DELETE_USER, EDIT_USER, UPDATE_USER} from '../type/RegisterFile'

export const addNewUserAction = (newUser) => ({
    type: ADD_USER,
    newUser
})

// rxaction 
export const updateUserAction = (userUpdate) => ({
    type: UPDATE_USER,
    userUpdate
})

export const deleteUserAction = (idUser) => ({
    type: DELETE_USER,
    idUser
})

export const editUserAction = (userEdit) => ({
    type: EDIT_USER,
    userEdit
})


