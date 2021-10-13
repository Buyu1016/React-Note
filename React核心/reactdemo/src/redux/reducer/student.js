/* eslint import/no-anonymous-default-export: off */
import { STUDENTSET, STUDENTADD, STUDENTCLEAR, STUDENTUPDATE } from '../action/student'

const initialState = []

export default (state = initialState, { type, payload }) => {

    switch (type) {
        case STUDENTSET:
            return [...state, ...payload]
        case STUDENTUPDATE:
            return [...payload]
        case STUDENTADD:
            return [...state, payload]
        case STUDENTCLEAR:
            return []
        default:
            return state
    }
}
