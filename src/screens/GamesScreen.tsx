import React, { Component } from "react";
import {
	View,
	Text,
	ListView,
	StyleSheet,
	TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import { AppState } from "../store";
import { GameType } from "../gameEvents";
import { scale } from "../styles/scale";
import Header from "../components/Header";
import { globalColors } from "../styles/colors";
import ButtonWFunc from "../components/ButtonWFunc";
import { setJoinedPlayer } from "../gameReducer/actions";
import { withRouter } from "react-router";

interface Props {
	games: Array<GameType>;
	dispatch: any;
	match: any;
	location: any;
	history: any;
}

class GamesScreen extends Component<Props> {
	constructor(props: Props) {
		super(props);
		this.handleJoinPress = this.handleJoinPress.bind(this);
	}

	public handleJoinPress(id: number, color: string) {
		console.log(id);
		console.log(color);
		this.props.dispatch(setJoinedPlayer(id, color));
		this.props.history.push("/playerGame");
	}
	public render() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		const dataSource = ds.cloneWithRows(this.props.games);
		return (
			<View style={style.container}>
				<Header backButton={true} />
				{this.props.games.length == 0 ? (
					<View style={[style.container, style.centerPosition]}>
						<Text>No currently active games</Text>
					</View>
				) : (
					<ListView
						style={style.listViewStyle}
						dataSource={dataSource}
						renderRow={(rowData: GameType) => (
							<View style={[style.line, style.box]}>
								<Text>{rowData.name}</Text>
								<View style={style.verticalBorder} />
								<Text>Admin Color: {rowData.adminColor}</Text>
								<View style={style.verticalBorder} />
								<ButtonWFunc
									text={"Join"}
									onPress={() =>
										this.handleJoinPress(
											rowData.id,
											rowData.adminColor
										)
									}
								/>
							</View>
						)}
					/>
				)}
			</View>
		);
	}
}

const mapStateToProps = (state: AppState) => ({
	games: state.gameEvents.games
});

const style = StyleSheet.create({
	container: {
		flex: 1
	},
	centerPosition: {
		padding: scale(20),
		alignItems: "center",
		justifyContent: "center"
	},
	listViewStyle: {
		padding: scale(20)
	},
	line: {
		borderBottomColor: globalColors.grey,
		borderBottomWidth: 1
	},
	verticalBorder: {
		borderLeftColor: globalColors.grey,
		borderLeftWidth: 1
	},
	box: {
		flexDirection: "row",
		padding: scale(10),
		justifyContent: "space-between",
		alignItems: "center"
	}
});

export default connect(mapStateToProps)(withRouter<Props>(GamesScreen));
