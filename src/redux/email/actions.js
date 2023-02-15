const addEmail = (data) => {
  return {
    type: "ADD_EMAIL",
    payload: {data:data},
  };
};
const editEmail = (id, newData) => {
  return {
    type: "EDIT_EMAIL",
    payload: {
        id,
        newData
    },
  };
};
const deleteEmail = (id) => {
  return {
    type: "DELETE_EMAIL",
    payload: {id},
  };
};
export {
    addEmail, editEmail,deleteEmail
}