import { emailInitialState } from "./state";
import {
  ADD_EMAIL,
  CHANGE_TAB,
  CLOSE_EDITOR,
  CLOSE_MODAL,
  DELETE_EMAIL,
  EDIT_EMAIL,
  EMPTY_SEARCH,
  OPEN_EDITOR,
  OPEN_MODAL,
  PERFORM_SEARCH,
  UPDATE_FORMDATA,
  UPDATE_VALUE,
} from "./types";

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
  let newData = state.data
    .filter((ele) => ele.id !== action.payload.id)
    .map((ele, index) => {
      return {
        ...ele,
        id: index + 1,
      };
    });
  return newData;
};
const setFormData = (state, action) => {
  let value = state.data.find(ele=>ele.id === action.payload.id)
  return {
    ...value,
    id: action.payload.id
  }
};
const performSearch = (state, action) => {
  let data = state.data.filter(ele=>ele.name === state.search)
  return data
}

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
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    case OPEN_EDITOR:
      return {
        ...state,
        isEdit: true,
        formData: setFormData(state,action)
      };
    case CHANGE_TAB:
      return {
        ...state,
        tab: action.payload.value,
      };
    case PERFORM_SEARCH:
      return {
        ...state,
        searchResult: performSearch(state,action)
      }
    case UPDATE_VALUE:
      return {
        ...state,
        search: action.payload.val
      }
    case EMPTY_SEARCH: 
      return {
        ...state,
        searchResult: []
      }
    case UPDATE_FORMDATA:
      return {
        ...state,
        formData: setFormData(state,action)
      }
    case CLOSE_EDITOR:
      return {
        ...state,
        isEdit: false,
        formData: {}
      }
    default:
      return state;
  }
};
export { emailReducer };
