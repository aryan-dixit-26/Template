const ADD = "template/email/add";
const EDIT = "template/email/edit";
const DELETE = "template/email/delete";

const emailInitialState = {
  emailData: [],
};

export const addEmail = (data) => {
  return {
    type: "template/email/add",
    payload: {
      data,
    },
  };
};

export const editEmail = (id, newData) => {
  return {
    type: "template/email/edit",
    payload: {
      id,
      newData,
    },
  };
};

export const deleteEmail = (id) => {
  return {
    type: "template/email/delete",
    payload: {
      id,
    },
  };
};

const emailReducer2 = (state = emailInitialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        emailData: addEmailData(state, action),
      };
    case EDIT:
      return {
        ...state,
        emailData: editEmailData(state, action),
      };
    case DELETE:
      return {
        ...state,
        emailData: deleteEmailData(state, action),
      };
    default:
      return state;
  }
};


const addEmailData = (state, action) => {
  let newData = {
    ...action.payload.data,
    id: state.emailData.length + 1,
  };
  return [...state.emailData, newData];
};

const editEmailData = (state, action) => {
  let index = state.emailData.findIndex(
    (data) => data.id === action.payload.id
  );
  return state.emailData.map((ele, ind) => {
    let newData = {
      ...action.payload.newData,
      id: state.emailData[index].id,
    };
    if (ind === index) {
      return {
        ...newData,
      };
    }
    return ele;
  });
};

const deleteEmailData = (state, action) => {
  let newData = state.emailData
    .filter((ele) => ele.id !== action.payload.id)
    .map((ele, index) => {
      return {
        ...ele,
        id: index + 1,
      };
    });
  return newData;
};

export default emailReducer2;
