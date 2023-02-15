import { createStore } from "redux";
import { emailReducer } from "./email/reducer";
const store = createStore(emailReducer)
export default store