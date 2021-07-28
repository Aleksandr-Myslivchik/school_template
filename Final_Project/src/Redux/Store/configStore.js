import { createStore } from 'redux'
import rootReducer from '../Reducers/'

export function configStore(initialState) {

    const store = createStore(rootReducer,initialState)

    return store
}

