const ADD = "template/markup/add";
const EDIT = "template/markup/edit";
const DELETE = "template/markup/delete";

const markupInitialState = {
  markupData: [],
};

export const addMarkup = (data) => {
  return {
    type: "template/markup/add",
    payload: {
      data,
    },
  };
};

export const editMarkup = (id, newData) => {
  return {
    type: "template/markup/edit",
    payload: {
      id,
      newData,
    },
  };
};

export const deleteMarkup = (id) => {
  return {
    type: "template/markup/delete",
    payload: {
      id,
    },
  };
};

const markupReducer = (state = markupInitialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        markupData: addMarkupData(state, action),
      };
    case EDIT:
      return {
        ...state,
        markupData: editMarkupData(state, action),
      };
    case DELETE:
      return {
        ...state,
        markupData: deleteMarkupData(state, action),
      };
    default:
      return state;
  }
};

export const getMarkupState = ()=>{
    return markupInitialState
}

const addMarkupData = (state, action) => {
  let newData = {
    ...action.payload.data,
    id: state.markupData.length + 1,
  };
  return [...state.markupData, newData];
};

const editMarkupData = (state, action) => {
  let index = state.markupData.findIndex(
    (data) => data.id === action.payload.id
  );
  return state.markupData.map((ele, ind) => {
    let newData = {
      ...action.payload.newData,
      id: state.markupData[index].id,
    };
    if (ind === index) {
      return {
        ...newData,
      };
    }
    return ele;
  });
};

const deleteMarkupData = (state, action) => {
  let newData = state.markupData
    .filter((ele) => ele.id !== action.payload.id)
    .map((ele, index) => {
      return {
        ...ele,
        id: index + 1,
      };
    });
  return newData;
};

export default markupReducer;
