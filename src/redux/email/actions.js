const addEmail = (data) => {
  return {
    type: "ADD_EMAIL",
    payload: { data: data },
  };
};
const editEmail = (id, newData) => {
  return {
    type: "EDIT_EMAIL",
    payload: {
      id,
      newData,
    },
  };
};
const deleteEmail = (id) => {
  return {
    type: "DELETE_EMAIL",
    payload: { id },
  };
};
const openModal = () => {
  return {
    type: "OPEN_MODAL",
  };
};
const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  };
};
const openEditor = (id) => {
    return {
        type: "OPEN_EDITOR",
        payload: {
            id
        }
    };
};
const changeTab = (val)=>{
    return {
        type: "CHANGE_TAB",
        payload: {
          value: val
        }
    }
}
const performSearch = ()=>{
  return {
    type: "PERFORM_SEARCH"
  }
}
const updateValue = (val) => {
  return {
      type: "UPDATE_VALUE",
      payload: {
          val
      }
  }
}
const emptySearch = (val) => {
  return {
    type: "EMPTY_SEARCH"
  }
}
const updateFormData = ()=>{
  return {
    type: "UPDATE_FORMDATA",
  }
}
const closeEditor = () =>{
  return {
    type: "CLOSE_EDITOR",
  }
}

export { addEmail, editEmail, deleteEmail, openModal, closeModal, openEditor, changeTab, updateValue, performSearch, emptySearch, updateFormData, closeEditor };
