export const CHANGE_USER_NAME = "CHANGE_USER_NAME";

export const changeUsername = (text: string) => ({
	type: CHANGE_USER_NAME,
	text
});
