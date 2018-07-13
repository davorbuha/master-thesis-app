import { applyMiddleware, createStore, Middleware, AnyAction } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

import { State as UserState } from "./userReducer";
import { State as GameState, Color } from "./gameReducer";

export interface AppState {
	user: UserState;
	game: GameState;
}

export const initialState = {
	user: { username: null },
	game: { gameName: null, adminColor: Color.white }
};

const store = createStore<AppState, AnyAction, {}, {}>(
	rootReducer,
	initialState,
	composeWithDevTools()
);

export default store;
