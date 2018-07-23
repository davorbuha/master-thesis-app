import { combineReducers } from "redux";

import { AppState } from "./store";
import UserReducer from "./userReducer";
import GameReducer from "./gameReducer";
import loadingReducer from "./loadingReducer";
import gameEventsReducer from "./gameEvents";

const rootReducer = combineReducers<AppState>({
	user: UserReducer,
	game: GameReducer,
	loading: loadingReducer,
	gameEvents: gameEventsReducer
});

export default rootReducer;
