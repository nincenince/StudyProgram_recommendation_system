//const data = ["","","","","",0]
const data = {};
  const personality_info_Reducer = (state = data, action) => {
    switch(action.type){
        case "UPDATE_PER":
          //state[0] = action.payload;
          state = action.payload;
          return state
        case "DESTROY_PER":
          state = {};
          return state;
        default:
          return state;
    }
  }
  export default personality_info_Reducer;