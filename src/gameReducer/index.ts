import { AnyAction } from "redux";
import {
	CHANGE_GAME_NAME,
	CHANGE_COLOR_SWITCH,
	CHANGE_MOVE_TIME
} from "./actions";

export enum Color {
	black,
	white
}

export interface State {
	gameName: string | null;
	adminColor: Color;
	moveTime: number;
}

const GameReducer = (
	state: State = { gameName: null, adminColor: Color.white, moveTime: 1 },
	action: AnyAction
) => {
	switch (action.type) {
		case CHANGE_GAME_NAME:
			return { ...state, gameName: action.text };

		case CHANGE_COLOR_SWITCH:
			return { ...state, adminColor: action.color };

		case CHANGE_MOVE_TIME:
			return { ...state, moveTime: action.e };

		default:
			return state;
	}
};

export default GameReducer;
