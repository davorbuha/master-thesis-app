import { Color } from "../gameReducer";

export class CreateGameReply {
	public static fromJSON(maybe: any): CreateGameReply {
		return new CreateGameReply(maybe.admin_token, maybe.id);
	}
	public AdminToken: string;
	public id: number;

	constructor(AdminToken: string, id: number) {
		this.AdminToken = AdminToken;
		this.id = id;
	}
}

export interface Service {
	createGame(
		gameName: string,
		moveTime: number,
		adminColor: Color
	): Promise<CreateGameReply>;
	cancelGame(id: number, adminToken: string): Promise<boolean>;
}
