//const data = ["","","","","",0]
const data = {};
  const education_info_Reducer = (state = data, action) => {
    switch(action.type){
        case "UPDATE_EDU":
          //state[0] = action.payload;
          state = action.payload;
          return state
        case "DESTROY_EDU":
          state = {};
          return state;
        default:
          return state;
    }
  }
  export default education_info_Reducer;