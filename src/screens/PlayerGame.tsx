import React, { Component } from "react";
import { Text, Dimensions } from "react-native";
import { AppState } from "../store";
import { connect } from "react-redux";
import { makeJoinPlayerJSON } from "../functions";
import { URL } from "../../const";
import { InGameState } from "../gameReducer";
import { updateGameState } from "../gameReducer/actions";
import BoardView from "../lib/Board.js";

interface Props {
	id: number;
	username: string;
	InGameState: InGameState;
	dispatch: any;
}

class PlayerGame extends Component<Props> {
	public playerws: WebSocket;
	constructor(props: Props) {
		super(props);
		this.playerws = new WebSocket(
			URL + "join_game/" + String(this.props.id)
		);
	}
	componentWillMount() {
		console.log(makeJoinPlayerJSON(this.props.username));
		this.playerws.onopen = () => {
			this.playerws.send(makeJoinPlayerJSON(this.props.username));
		};
		this.playerws.onmessage = e => {
			const json = JSON.parse(e.data);
			switch (json.type) {
				case "game.started":
					this.props.dispatch(
						updateGameState(InGameState.gameStarted)
					);
					break;

				default:
					break;
			}
		};
	}
	public render() {
		console.log("inGameState", this.props.InGameState);
		switch (this.props.InGameState) {
			case InGameState.gameStarted:
				return (
					// <Text>asd</Text>
					<BoardView
						fen={
							"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
						}
						size={340}
						color={"w"}
					/>
				);

			default:
				return <Text>Daki</Text>;
		}
	}
}

const mapStateToProps = (state: AppState) => ({
	InGameState: state.game.state,
	username: state.user.username,
	id: state.game.joinedPlayer.idToJoin
});

export default connect(mapStateToProps)(PlayerGame);
