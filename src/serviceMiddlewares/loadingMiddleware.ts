import { Service, CreateGameReply } from "../types/service";
import { startLoading, stopLoading } from "../loadingReducer/actions";
import { Color } from "../gameReducer";

export class LoadingMiddleware implements Service {
	public next: Service;
	public dispatch: any;

	constructor(next: Service, dispatch: any) {
		this.next = next;
		this.dispatch = dispatch;
	}

	public async createGame(
		gameName: string,
		moveTime: number,
		adminColor: Color
	): Promise<CreateGameReply> {
		this.dispatch(startLoading(this.createGame));
		console.log("loading", adminColor);
		try {
			const result = await this.next.createGame(
				gameName,
				moveTime,
				adminColor
			);
			this.dispatch(stopLoading(this.createGame));

			return result;
		} catch (e) {
			this.dispatch(stopLoading(this.createGame));
			throw e;
		}
	}

	public async cancelGame(id: number, adminToken: string): Promise<boolean> {
		this.dispatch(startLoading(this.createGame));

		try {
			const result = await this.next.cancelGame(id, adminToken);
			this.dispatch(stopLoading(this.createGame));

			return result;
		} catch (e) {
			this.dispatch(stopLoading(this.createGame));
			throw e;
		}
	}
}
