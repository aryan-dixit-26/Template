const addMarkup = (data) => {
    return {
        type: "ADD_MARKUP",
        payload: { data: data }
    };
};

const editMarkup = (id, newData) => {
    return {
        type: "EDIT_MARKUP",
        payload: {
            id,
            newData
        }
    };
};

const deleteMarkup = (id) => {
    return {
        type: "DELETE_MARKUP",
        payload: { id }
    };
};

const updateValueMarkup = (val) => {
    return {
        type: "UPDATE_VALUE",
        payload: {
            val
        }
    }
}

const performSearchMarkup = ()=>{
    return {
        type: "PERFORM_SEARCH",
    }
}

const emptySearchMarkup = ()=> {
    return{
        type: "EMPTY_SEARCH"
    }
}

const openEditorMarkup = (id) => {
    return {
        type: "OPEN_EDITOR",
        payload: {
            id
        }
    };
};

const closeEditorMarkup = ()=> {
    return {
        type: "CLOSE_EDITOR"
    }
}

const updateMarkupData = () => {
    return {
        type: "UPDATE_MARKUP_FORM"
    }
}

export { addMarkup, editMarkup, deleteMarkup, updateValueMarkup, performSearchMarkup, emptySearchMarkup, openEditorMarkup, closeEditorMarkup, updateMarkupData }