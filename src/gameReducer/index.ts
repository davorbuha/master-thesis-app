import { AnyAction } from "redux";
import { CHANGE_GAME_NAME, CHANGE_COLOR_SWITCH } from "./actions";

export enum Color {
	black,
	white
}

export interface State {
	gameName: string | null;
	adminColor: Color;
}

const GameReducer = (
	state: State = { gameName: null, adminColor: Color.white },
	action: AnyAction
) => {
	switch (action.type) {
		case CHANGE_GAME_NAME:
			return { ...state, gameName: action.text };

		case CHANGE_COLOR_SWITCH:
			return { ...state, adminColor: action.color };
		default:
			return state;
	}
};

export default GameReducer;
