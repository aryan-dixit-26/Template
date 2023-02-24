import { combineReducers } from "redux";
import  emailReducer2 from "../ducks/email";
import  markupReducer2 from "../ducks/markup";
import searchReducer from "../ducks/search";
import inputFormReducer from "../ducks/InputForm";
import generalReducer from "../ducks/general";

const rootReducer = combineReducers({
    markupReducer2,
    emailReducer2,
    searchReducer,
    inputFormReducer,
    generalReducer
})

export default rootReducer