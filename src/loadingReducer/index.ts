import { AnyAction } from "redux";

import {
	START_LOADING,
	STOP_LOADING,
	DISABLE_LOADING,
	ENABLE_LOADING
} from "./actions";

export interface Load {
	[index: string]: boolean;
}

export interface State {
	readonly disable: boolean;
	readonly loadings: Load | null;
}

const loadingReducer = (
	state: State = { disable: false, loadings: null },
	action: AnyAction
) => {
	let addId: string;
	switch (action.type) {
		case START_LOADING:
			return {
				...state,
				loadings: { ...state.loadings, [action.name]: true }
			};

		case STOP_LOADING:
			return {
				...state,
				loadings: { ...state.loadings, [action.name]: false }
			};

		case DISABLE_LOADING:
			return { ...state, disable: true };

		case ENABLE_LOADING:
			return { ...state, disable: false };

		default:
			return state;
	}
};

export default loadingReducer;
