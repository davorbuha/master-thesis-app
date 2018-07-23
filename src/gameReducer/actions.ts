import { Color, InGameState } from ".";

export const CHANGE_GAME_NAME = "CHANGE_GAME_NAME";
export const CHANGE_COLOR_SWITCH = "CHANGE_COLOR_SWITCH";
export const CHANGE_MOVE_TIME = "CHANGE_MOVE_TIME";
export const UPDATE_CREATED = "UPDATE_CREATED";
export const UPDATE_GAME_STATE = "UPDATE_GAME_STATE";
export const SET_JOINED_PLAYER = "SET_JOINED_PLAYER";

export const changeGameName = (text: string) => ({
	type: CHANGE_GAME_NAME,
	text
});

export const changeColorSwitch = (color: Color) => ({
	type: CHANGE_COLOR_SWITCH,
	color
});

export const changeMoveTime = (e: number) => ({
	type: CHANGE_MOVE_TIME,
	e
});

export const updateCreated = (token: string, id: number) => ({
	type: UPDATE_CREATED,
	token,
	id
});

export const updateGameState = (state: InGameState) => ({
	type: UPDATE_GAME_STATE,
	state
});

export const setJoinedPlayer = (id: number, color: string) => ({
	type: SET_JOINED_PLAYER,
	id,
	color
});
