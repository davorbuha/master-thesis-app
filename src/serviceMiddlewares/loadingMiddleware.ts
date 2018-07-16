import { Service, CreateGameReply } from "../types/service";
import { startLoading, stopLoading } from "../loadingReducer/actions";

export class LoadingMiddleware implements Service {
	public next: Service;
	public dispatch: any;

	constructor(next: Service, dispatch: any) {
		this.next = next;
		this.dispatch = dispatch;
	}

	public async createGame(
		gameName: string,
		moveTime: number
	): Promise<CreateGameReply> {
		this.dispatch(startLoading(this.createGame));

		try {
			const result = await this.next.createGame(gameName, moveTime);
			this.dispatch(stopLoading(this.createGame));

			return result;
		} catch (e) {
			this.dispatch(stopLoading(this.createGame));
			throw e;
		}
	}
}
