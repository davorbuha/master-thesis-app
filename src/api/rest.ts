import { Service, CreateGameReply } from "../types/service";
import Axios, { AxiosResponse } from "axios";

export class REST implements Service {
	public url: string;

	constructor(url: string) {
		this.url = url;
	}

	public createGame(
		gameName: string,
		moveTime: number
	): Promise<CreateGameReply> {
		return Axios.get(
			this.url +
				"/create_game/" +
				String(gameName) +
				"/move_time/" +
				String(moveTime)
		).then((resp: AxiosResponse) => {
			return CreateGameReply.fromJSON(resp.data);
		});
	}
}
