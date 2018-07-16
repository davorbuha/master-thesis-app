/* tslint:disable:ban-types */

export const START_LOADING = "START_LOADING";
export type START_LOADING = typeof START_LOADING;

export interface StartLoading {
	type: START_LOADING;
	name: string;
}

export const startLoading = (func: Function): StartLoading => {
	return {
		type: START_LOADING,
		name: func.name
	};
};

export const STOP_LOADING = "STOP_LOADING";
export type STOP_LOADING = typeof STOP_LOADING;

export interface StopLoading {
	type: STOP_LOADING;
	name: string;
}

export const stopLoading = (func: Function): StopLoading => {
	return {
		type: STOP_LOADING,
		name: func.name
	};
};

export const DISABLE_LOADING = "DISABLE_LOADING";
export type DISABLE_LOADING = typeof DISABLE_LOADING;

export const ENABLE_LOADING = "ENABLE_LOADING";
export type ENABLE_LOADING = typeof ENABLE_LOADING;

export interface DisableLoading {
	type: DISABLE_LOADING;
}

export const disableLoading = () => {
	return {
		type: DISABLE_LOADING
	};
};

export interface EnableLoading {
	type: ENABLE_LOADING;
}

export const enableLoading = () => {
	return {
		type: ENABLE_LOADING
	};
};
