//const data = ["","","","","",0]
const data = {};
  const recommend_payload_Reducer = (state = data, action) => {
    switch(action.type){
        case "UPDATE_RECPAY":
          //state[0] = action.payload;
          state = action.payload;
          return state
        case "DESTROY_RECPAY":
          state = {};
          return state;
        default:
          return state;
    }
  }
  export default recommend_payload_Reducer;