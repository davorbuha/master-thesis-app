import { combineReducers, AnyAction } from "redux";

import { AppState } from "./store";
import UserReducer from "./userReducer";
import GameReducer from "./gameReducer";

const rootReducer = combineReducers<AppState>({
	user: UserReducer,
	game: GameReducer
});

export default rootReducer;
