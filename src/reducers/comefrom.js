const comefromReducer = (state = "", action) => {
    switch(action.type){
        case "UPDATE_COMEFROM":
            state = action.payload;
            return state;
        case "DESTROY_COMEFROM":
            state = ""
            return state;
        default:
            return state;
    }
}
export default comefromReducer;