import { Color } from ".";

export const CHANGE_GAME_NAME = "CHANGE_GAME_NAME";
export const CHANGE_COLOR_SWITCH = "CHANGE_COLOR_SWITCH";
export const CHANGE_MOVE_TIME = "CHANGE_MOVE_TIME";

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
