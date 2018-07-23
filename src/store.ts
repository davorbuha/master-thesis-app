import { applyMiddleware, createStore, Middleware, AnyAction } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { State as LoadingState } from "./loadingReducer";
import { State as UserState } from "./userReducer";
import { State as GameState, Color } from "./gameReducer";
import { State as GameEvents } from "./gameEvents";

export interface AppState {
	user: UserState;
	game: GameState;
	loading: LoadingState;
	gameEvents: GameEvents;
}

export const initialState = {
	user: { username: null },
	game: {
		state: null,
		gameName: null,
		adminColor: Color.white,
		moveTime: 30,
		created: {
			okay: false,
			adminToken: null,
			id: null
		}
	},
	loading: {},
	gameEvents: { games: [] }
};

const store = createStore<AppState, AnyAction, {}, {}>(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
