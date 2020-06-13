export const login = (payload) => {
    return (dispatch) => {
        fetch('path', payload)
        .then(res => res.json)
        .then(response =>{
            const action = {
                type: 'LOGIN',
                value: response
            }
            dispatch(action)
        })
    }
}