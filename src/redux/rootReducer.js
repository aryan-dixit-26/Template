import { combineReducers } from "redux";
import { emailReducer } from "./email/reducer";
import markupReducer from "./markup/reducer";

const rootReducer = combineReducers({
    emailReducer,
    markupReducer
})

export default rootReducer