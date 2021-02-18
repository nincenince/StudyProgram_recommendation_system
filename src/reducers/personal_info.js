//const data = ["","","","","",0]
const data = {
  firstname: "",
  lastname: "",
  email: "",
  age: 0,
  sex: ""
};
const personal_info_Reducer = (state = data, action) => {
  switch(action.type){
      case "UPDATE_FIRSTNAME":
        //state[0] = action.payload;
        state.firstname = action.payload;
        return state
      case "DESTROY_FIRSTNAME":
        state.firstname = "";
        return state;
      case "UPDATE_LASTNAME":
        state.lastname = action.payload;
        return state;
      case "DESTROY_LASTNAME":
        state.lastname = ""
        return state;
      case "UPDATE_EMAIL":
        state.email = action.payload;
        return state;
      case "DESTROY_EMAIL":
        state.email = ""
        return state;
      case "UPDATE_SEX":
        state.sex = action.payload;
        return state;
      case "DESTROY_SEX":
        state.sex = ""
        return state;
      case "UPDATE_AGE":
        state.age = action.payload;
        return state;
      case "DESTROY_AGE":
        state.age = 0
        return state;
      default:
        return state;
  }
}
export default personal_info_Reducer;