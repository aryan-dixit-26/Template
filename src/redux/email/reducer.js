import { emailInitialState } from "./state";
import { ADD_EMAIL, DELETE_EMAIL, EDIT_EMAIL } from "./types";

const addEmailData = (state, action) => {
  let newData = {
    ...action.payload.data,
    id: state.data.length + 1,
  };
  return [...state.data, newData];
};
const editEmailData = (state, action) => {
  let index = state.data.findIndex((data) => data.id === action.payload.id);
  return state.data.map((ele, ind) => {
    let newData = {
      ...action.payload.newData,
      id: state.data[index].id
    }
    if (ind === index) {
      return {
        ...newData,
      };
    }
    return ele;
  });
};
const deleteEmailData = (state, action) => {
  let newData = state.data.filter((ele) => ele.id !== action.payload.id).map((ele,index)=>{
    return {
      ...ele,
      id: index + 1
    }
  });
  return newData
};

const emailReducer = (state = emailInitialState, action) => {
  switch (action.type) {
    case ADD_EMAIL:
      return {
        ...state,
        data: addEmailData(state, action),
      };
    case EDIT_EMAIL:
      return {
        ...state,
        data: editEmailData(state, action),
      };
    case DELETE_EMAIL:
      return {
        ...state,
        data: deleteEmailData(state, action),
      };
    default:
      return state;
  }
};
export { emailReducer };
