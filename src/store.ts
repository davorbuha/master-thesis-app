import { applyMiddleware, createStore, Middleware, AnyAction } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { State as LoadingState } from "./loadingReducer";
import { State as UserState } from "./userReducer";
import { State as GameState, Color } from "./gameReducer";

export interface AppState {
	user: UserState;
	game: GameState;
	loading: LoadingState;
}

export const initialState = {
	user: { username: null },
	game: { gameName: null, adminColor: Color.white, moveTime: 30 },
	loading: {}
};

const store = createStore<AppState, AnyAction, {}, {}>(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
