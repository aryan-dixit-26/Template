import { markupInitialState } from "./state"
import { ADD_MARKUP, DELETE_MARKUP, EDIT_MARKUP, EMPTY_SEARCH, PERFORM_SEARCH, UPDATE_VALUE } from "./types"

const addMarkupData = (state, action) => {
    let newData = {
        ...action.payload.data,
        id: state.data.length + 1
    }
    return [...state.data, newData]
}
const editMarkupData = (state, action) =>{
    let index = state.data.findIndex(data =>  data.id === action.payload.id)
    return state.data.map((ele, ind) => {
        let newData = {
            ...action.payload.newData,
            id: state.data[index].id
        };
        if(ind === index){
            return {
                ...newData,
            }
        }
        return ele
    })
}
const deleteMarkupData = (state, action) => {
    let newData = state.data.filter((ele)=> ele.id !== action.payload.id).map((ele, index)=> {
        return {
            ...ele,
            id: index + 1,
        }
    })
    return newData
}
const performSearch = (state, action) => {
    let data =  state.data.filter(ele=>state.search === state.data.name)
    return data;
}
const markupReducer = (state = markupInitialState, action) => {
    switch(action.type){
        case ADD_MARKUP: 
        return {
            ...state,
            data: addMarkupData(state, action)
        }
        case EDIT_MARKUP: return {
            ...state,
            data: editMarkupData(state, action)
        }
        case DELETE_MARKUP: return {
            ...state,
            data: deleteMarkupData(state, action)
        }
        case UPDATE_VALUE: return {
            ...state,
            search: action.payload.val
        }
        case PERFORM_SEARCH: return {
            ...state,
            searchResult: performSearch(state,action)
        }
        case EMPTY_SEARCH: return {
            ...state,
            searchResult: []
        }
        default: return state
    }
}

export default markupReducer