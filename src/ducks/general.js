const OPEN_EDITOR='template/general/open_editor'
const CLOSE_EDITOR='template/general/close_editor'
const CHANGE_TAB='template/general/change_tab'
const OPEN_MODAL='template/general/open_modal'
const CLOSE_MODAL='template/general/close_modal'

const generalState = {
    isEdit: false, 
    tab: 0,
    isOpen: false
}

export const openEditor = (id)=>{
    return {
        type: 'template/general/open_editor',
        payload: {
            id
        }
    }
}

export const closeEditor = () => {
    return {
        type: 'template/general/close_editor'
    }
}

export const changeTab = (val) => {
    return {
        type: 'template/general/change_tab',
        payload: {
            val
        }
    }
}

export const openModal = () => {
    return {
        type: 'template/general/open_modal'
    }
} 

export const closeModal = () => {
    return {
        type: 'template/general/close_modal'
    }
}

export const editorOpener = (id, setFormDataId,formUpdater,data) => {
    return (dispatch)=>{
        dispatch(setFormDataId(id))
        dispatch(openEditor(id))
        dispatch(formUpdater(id,data))
    }
}

const generalReducer = (state=generalState, action) => {
    switch(action.type){
        case OPEN_EDITOR:
            return {
                ...state,
                isEdit: true,
            }
        case CLOSE_EDITOR:
            return {
                ...state,
                isEdit: false
            }
        case CHANGE_TAB:
            return {
                ...state,
                tab: action.payload.val
            }
        case OPEN_MODAL:
            return {
                ...state,
                isOpen: true
            }
        case CLOSE_MODAL:
            return {
                ...state,
                isOpen: false
            }
        default: return state
    }
}

export default generalReducer
