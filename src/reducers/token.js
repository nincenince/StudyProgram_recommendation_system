

const tokenReducer = (state = "", action) => {
    switch(action.type){
        case "UPDATE":
            state = action.payload;
            return state;
        case "DESTROY":
            state = ""
            return state;
        default:
            return state;
    }
}
export default tokenReducer;