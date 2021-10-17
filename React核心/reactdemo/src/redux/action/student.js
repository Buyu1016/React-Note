import { createActions, handleActions } from 'redux-actions'

export const actions = createActions({
    FETCH_SEARCH_STUDENT: payload => payload,
    SEARCH_STUDENT: payload => payload
})

export const reducers = handleActions({
    [actions.fetchSearchStudent]: (state) => [...state],
    [actions.searchStudent]: (state, action) => {
        console.log('监听到了', action.payload)
        return [...action.payload]
    }
}, [])
