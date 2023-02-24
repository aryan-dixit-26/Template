const UPDATE_SEARCH_VALUE='template/search/update_search_value'
const PERFORM_SEARCH='template/search/perform_search'
const CLEAR_SEARCH='template/search/clear_search'


const searchInitialState = {
    search: "",
    searchResult: []
}

export const updateSearchValue = (value) => {
    return {
        type:  'template/search/update_search_value',
        payload: {
            value
        }
    }
}

export const performSearch = (data) => {
    return {
        type: 'template/search/perform_search',
        payload: {
            data
        }
    }
}

export const clearSearch = () => {
    return {
        type: 'template/search/clear_search'
    }
}

export const searcher = (data)=>{
    return (dispatch) =>{
        dispatch(performSearch(data))
    }
}

const searchReducer = (state=searchInitialState,action) => {
    switch(action.type){
        case UPDATE_SEARCH_VALUE:
            return {
                ...state,
                search: action.payload.value
            }
        case PERFORM_SEARCH:
            return {
                ...state,
                searchResult: searchPerformer(state,action)
            }
        case CLEAR_SEARCH:
            return {
                ...state,
                searchResult: []
            }
        default: return state
    }
}

const searchPerformer = (state,action) => {
    const data = action.payload.data.filter(ele=>ele.name === state.search)
    return data
}

export default searchReducer