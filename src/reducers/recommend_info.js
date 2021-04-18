//const data = ["","","","","",0]
const data = {};
  const recommend_info_Reducer = (state = data, action) => {
    switch(action.type){
        case "UPDATE_REC":
          //state[0] = action.payload;
          state = action.payload;
          return state
        case "DESTROY_REC":
          state = {};
          return state;
        default:
          return state;
    }
  }
  export default recommend_info_Reducer;