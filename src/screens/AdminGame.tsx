import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import ButtonWFunc from "../components/ButtonWFunc";
import { connect } from "react-redux";
import { AppState } from "../store";
import { scale } from "../styles/scale";
import service from "../../service";
import { withRouter } from "react-router";
import { InGameState, Color } from "../gameReducer";
import { URL } from "../../const";
import { makeJoinAdminJSON } from "../functions";
import { GameEventsType } from "../types/gameEvents";
import { updateGameState } from "../gameReducer/actions";

interface AdminWaitingProps {
	id: number;
	adminToken: string;
	history: any;
}

const AdminWaiting = ({ id, adminToken, history }: AdminWaitingProps) => {
	const handleCancelButton = () => {
		service.cancelGame(id, adminToken).then(res => {
			console.log(res);
			history.push("/");
		});
	};
	return (
		<View style={style.container}>
			<Header backButton={false} />
			<View style={[style.container, style.positionCenter]}>
				<Text style={{ marginBottom: scale(10) }}>
					Waiting for second player to join
				</Text>
				<ButtonWFunc
					onPress={handleCancelButton}
					text={"Cancel game"}
				/>
			</View>
		</View>
	);
};

const style = StyleSheet.create({
	container: {
		flex: 1
	},
	positionCenter: {
		alignItems: "center",
		justifyContent: "center"
	}
});

interface Props {
	InGameState: InGameState;
	id: number;
	adminToken: string;
	color: Color;
	username: string;
	history: any;
	location: any;
	match: any;
	dispatch: any;
}

class AdminGame extends Component<Props> {
	public adminws: WebSocket;
	constructor(props: Props) {
		super(props);
		this.adminws = new WebSocket(URL + "join_game/" + this.props.id);
	}

	componentWillMount() {
		this.adminws.onopen = () => {
			this.adminws.send(
				makeJoinAdminJSON(
					this.props.color,
					this.props.username,
					this.props.adminToken
				)
			);
		};
		this.adminws.onmessage = e => {
			const json = JSON.parse(e.data);
			console.log(json);
			switch (json.type) {
				case "game.started":
					console.log("game.started");
					this.props.dispatch(
						updateGameState(InGameState.gameStarted)
					);
					break;

				default:
					console.log("default");
					break;
			}
		};
	}

	public render() {
		switch (this.props.InGameState) {
			case InGameState.waitForPlayerTwo:
				return (
					<AdminWaiting
						history={this.props.history}
						id={this.props.id}
						adminToken={this.props.adminToken}
					/>
				);
			case InGameState.gameStarted:
				return <Text>Game.started</Text>;

			default:
				break;
		}
	}
}

const maspStateToProps = (state: AppState) => ({
	InGameState: state.game.state as InGameState,
	id: state.game.created.id,
	adminToken: state.game.created.adminToken,
	color: state.game.adminColor,
	username: state.user.username
});

export default connect(maspStateToProps)(withRouter<Props>(AdminGame));
