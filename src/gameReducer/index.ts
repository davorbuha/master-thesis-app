import { AnyAction } from "redux";
import {
	CHANGE_GAME_NAME,
	CHANGE_COLOR_SWITCH,
	CHANGE_MOVE_TIME,
	UPDATE_CREATED,
	UPDATE_GAME_STATE,
	SET_JOINED_PLAYER
} from "./actions";

export enum Color {
	black,
	white
}

export enum InGameState {
	waitForPlayerTwo,
	gameStarted
}

export interface State {
	state: InGameState | null;
	gameName: string | null;
	adminColor: Color;
	moveTime: number;
	created: {
		okay: boolean;
		adminToken: string | null;
		id: number | null;
	};
	joinedPlayer: {
		idToJoin: number | null;
		adminColor: string;
	};
}

const GameReducer = (
	state: State = {
		state: null,
		gameName: null,
		adminColor: Color.white,
		moveTime: 30,
		created: {
			okay: false,
			adminToken: null,
			id: null
		},
		joinedPlayer: {
			idToJoin: null,
			adminColor: ""
		}
	},
	action: AnyAction
): State => {
	switch (action.type) {
		case CHANGE_GAME_NAME:
			return { ...state, gameName: action.text };

		case CHANGE_COLOR_SWITCH:
			return { ...state, adminColor: action.color };

		case CHANGE_MOVE_TIME:
			return { ...state, moveTime: action.e };

		case UPDATE_CREATED:
			return {
				...state,
				created: {
					okay: true,
					adminToken: action.token,
					id: action.id
				}
			};

		case UPDATE_GAME_STATE:
			return { ...state, state: action.state };

		case SET_JOINED_PLAYER:
			return {
				...state,
				joinedPlayer: { idToJoin: action.id, adminColor: action.color }
			};
		default:
			return state;
	}
};

export default GameReducer;
