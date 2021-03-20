const adminlockReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGN_IN_ADMIN':
            state = true;
            return state;
        case 'SIGN_OUT_ADMIN':
            state = false
            return state
        default: 
            return state;
    }
};
export default adminlockReducer;