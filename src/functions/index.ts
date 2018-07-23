import { Color } from "../gameReducer";

interface JoinAdminPayload {
	color: Color;
	name: string;
	admin_token: string;
}

export interface JoinAdminWS {
	type: string;
	payload: JoinAdminPayload;
}

export function makeJoinAdminJSON(
	color: Color,
	name: string,
	adminToken: string
): string {
	const toJSON: JoinAdminWS = {
		type: "join.admin",
		payload: {
			color: color,
			name: name,
			admin_token: adminToken
		}
	};
	return JSON.stringify(toJSON);
}

interface JoinPlayerPayload {
	color: Color;
	name: string;
}

export interface JoinPlayerWS {
	type: string;
	payload: JoinPlayerPayload;
}

export function makeJoinPlayerJSON(name: string): string {
	const toJSON: JoinPlayerWS = {
		type: "join.player",
		payload: {
			color: 0,
			name: name
		}
	};
	return JSON.stringify(toJSON);
}
