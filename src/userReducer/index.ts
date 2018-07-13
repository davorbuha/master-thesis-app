import { AnyAction } from "redux";
import { CHANGE_USER_NAME } from "./actions";

export interface State {
	username: string | null;
}

const UserReducer = (state: State = { username: null }, action: AnyAction) => {
	switch (action.type) {
		case CHANGE_USER_NAME:
			return { ...state, username: action.text };

		default:
			return state;
	}
};

export default UserReducer;
