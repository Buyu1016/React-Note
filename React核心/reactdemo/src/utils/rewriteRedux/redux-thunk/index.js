/* eslint import/no-anonymous-default-export: off */

function createThunk(extra) {
    return (store) => {
        return (dispatch) => {
            return (action) => {
                if (Object.prototype.toString.call(action) === '[object Function]') {
                    return action(store.dispatch, store.getState, extra)
                } else {
                    return dispatch(action)
                }
            }
        }
    }
}

const thunk = createThunk()
thunk.withExtra = createThunk

export default thunk
