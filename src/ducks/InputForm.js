const UPDATE_NAME_VALUE = "template/input_form/update_name_value";
const UPDATE_SUBJECT_VALUE = "template/input_form/update_subject_value";
const UPDATE_BODY_VALUE = "template/input_form/update_body_value";
const CLEAR_FORM = "template/input_form/clear_form";
const UPDATE_ID_VALUE = "template/input_form/update_id_value"
const UPDATE_FORM = "template/input_form/update_form"
const formInitialState = {
  formData: {
    name: "",
    desc: "",
    body: "",
    id: "",
  },
};

export const updateNameValue = (data) => {
  return {
    type: "template/input_form/update_name_value",
    payload: {
      data,
    },
  };
};

export const updateSubjectValue = (data) => {
  return {
    type: "template/input_form/update_subject_value",
    payload: {
      data,
    },
  };
};

export const updateBodyValue = (data) => {
  return {
    type: "template/input_form/update_body_value",
    payload: {
      data,
    },
  };
};

export const updateIdValue = (id) => {
    return {
        type: "template/input_form/update_id_value",
        payload: {
            id
        }
    }
}

export const updateForm = (data) => {
  return {
      type: "template/input_form/update_form",
      payload: {
        data
      }
  }
}

export const formUpdater = (id, data) => {
  return (dispatch) => {
     let value = data.find(ele=>ele.id === id)
     dispatch(updateForm(value))
  }
}

export const clearForm = () => {
  return {
    type: "template/input_form/clear_form",
  };
};

const inputFormReducer = (state = formInitialState, action) => {
  switch (action.type) {
    case UPDATE_NAME_VALUE:
      return {
        ...state,
        formData: {
          ...state.formData,
          name: action.payload.data,
        },
      };
    case UPDATE_SUBJECT_VALUE:
      return {
        ...state,
        formData: {
          ...state.formData,
          desc: action.payload.data,
        },
      };
    case UPDATE_BODY_VALUE:
      return {
        ...state,
        formData: {
          ...state.formData,
          body: action.payload.body,
        },
      };
    case UPDATE_ID_VALUE:
      return {
          ...state,
          formData: {
              ...state.formData,
              id: action.payload.id
          }
      }
    case UPDATE_FORM: 
      return {
        ...state,
        formData: action.payload.data
      }
    case CLEAR_FORM:
      return {
        ...state,
        formData: {
          name: "",
          desc: "",
          body: "",
          id: "",
        },
      };
    default:
      return state;
  }
};


export default inputFormReducer;
