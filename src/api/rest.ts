import { Service, CreateGameReply } from "../types/service";
import Axios, { AxiosResponse } from "axios";
import { Color } from "../gameReducer";

export class REST implements Service {
	public url: string;

	constructor(url: string) {
		this.url = url;
	}

	public createGame(
		gameName: string,
		moveTime: number,
		adminColor: Color
	): Promise<CreateGameReply> {
		let color: string;
		console.log("rest", adminColor);
		if (adminColor === Color.black) {
			color = "black";
		} else {
			color = "white";
		}
		return Axios.get(
			this.url +
				"/create_game/" +
				String(gameName) +
				"/move_time/" +
				String(moveTime) +
				"/admin_color/" +
				color
		).then((resp: AxiosResponse) => {
			return CreateGameReply.fromJSON(resp.data);
		});
	}

	public cancelGame(id: number, adminToken: string): Promise<boolean> {
		return Axios.get(
			this.url +
				"/close_game/" +
				String(id) +
				"/admin_token/" +
				String(adminToken)
		).then((resp: AxiosResponse) => {
			console.log(resp);
			return true;
		});
	}
}
