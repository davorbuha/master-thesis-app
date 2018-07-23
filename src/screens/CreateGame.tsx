import React, { Component } from "react";
import {
	TextInput,
	View,
	NativeSyntheticEvent,
	TextInputChangeEventData,
	StyleSheet,
	Text,
	Slider,
	TouchableOpacity
} from "react-native";

import { AppState } from "../store";
import { Color, InGameState } from "../gameReducer";
import { connect } from "react-redux";
import {
	changeGameName,
	changeColorSwitch,
	changeMoveTime,
	updateCreated,
	updateGameState
} from "../gameReducer/actions";
import Header from "../components/Header";
import { scale } from "../styles/scale";
import { globalColors } from "../styles/colors";
import KeyboardDismiss from "../components/KeyboardDismiss";
import ButtonWFunc from "../components/ButtonWFunc";
import service from "../../service";
import { CreateGameReply } from "../types/service";
import { withRouter } from "react-router";

interface Props {
	gameName: string;
	switchColor: Color;
	dispatch: any;
	moveTime: number;
	color: Color;
	history: any;
	location: any;
	match: any;
}

class CreateGame extends Component<Props> {
	public dispatch: any;
	constructor(props: Props) {
		super(props);
		this.onTextChange = this.onTextChange.bind(this);
		this.whitePress = this.whitePress.bind(this);
		this.blackPress = this.blackPress.bind(this);
		this.handleSliderChange = this.handleSliderChange.bind(this);
		this.handleCreatePress = this.handleCreatePress.bind(this);
		this.dispatch = this.props.dispatch;
	}

	onTextChange(e: NativeSyntheticEvent<TextInputChangeEventData>) {
		this.dispatch(changeGameName(e.nativeEvent.text));
	}

	whitePress() {
		this.dispatch(changeColorSwitch(Color.white));
	}

	blackPress() {
		this.dispatch(changeColorSwitch(Color.black));
	}

	handleSliderChange(e: any) {
		this.dispatch(changeMoveTime(e));
	}

	handleCreatePress() {
		console.log("component", this.props.color);
		service
			.createGame(
				this.props.gameName,
				this.props.moveTime,
				this.props.color
			)
			.then((res: CreateGameReply) => {
				this.dispatch(updateCreated(res.AdminToken, res.id));
				this.dispatch(updateGameState(InGameState.waitForPlayerTwo));
				this.props.history.push("/adminGame");
			})
			.catch(e => console.log(e));
	}

	public render() {
		const { moveTime, gameName } = this.props;

		const blackTextColor =
			this.props.switchColor === Color.black
				? { color: globalColors.white }
				: { color: globalColors.black };
		const whiteTextColor =
			this.props.switchColor === Color.white
				? { color: globalColors.white }
				: { color: globalColors.black };

		const blackBackgroundColor =
			this.props.switchColor === Color.black
				? { backgroundColor: globalColors.black }
				: { backgroundColor: globalColors.grey };

		const whiteBackgroundColor =
			this.props.switchColor === Color.white
				? { backgroundColor: globalColors.black }
				: { backgroundColor: globalColors.grey };

		return (
			<KeyboardDismiss>
				<View style={style.container}>
					<Header backButton={true} />
					<View style={style.row}>
						<Text>Game Name:</Text>
						<TextInput
							style={style.textInput}
							onChange={this.onTextChange}
							value={gameName}
							autoCapitalize={"none"}
						/>
					</View>
					<View style={style.rowChoose}>
						<Text>Choose your color:</Text>
						<TouchableOpacity onPress={this.blackPress}>
							<View
								style={[
									style.chooseBorder,
									blackBackgroundColor
								]}
							>
								<Text style={[blackTextColor]}>Black</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.whitePress}>
							<View
								style={[
									style.chooseBorder,
									whiteBackgroundColor
								]}
							>
								<Text style={[whiteTextColor]}>White</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={style.moveTimeView}>
						<Text>Move Time: </Text>
						<Slider
							style={style.sliderStyle}
							maximumValue={300}
							minimumValue={30}
							step={30}
							onValueChange={this.handleSliderChange}
						/>
					</View>
					<Text style={style.moveTimeValue}>{moveTime}</Text>
					<View style={style.buttonView}>
						<ButtonWFunc
							text={"Create"}
							onPress={this.handleCreatePress}
						/>
					</View>
				</View>
			</KeyboardDismiss>
		);
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1
	},
	textInput: {
		height: scale(30),
		width: scale(100),
		borderColor: "gray",
		borderWidth: 1,
		borderRadius: 2,
		paddingHorizontal: scale(5)
	},
	row: {
		marginTop: scale(60),
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center"
	},
	moveTimeView: {
		marginTop: scale(20),
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center"
	},
	sliderStyle: {
		width: scale(200)
	},
	moveTimeValue: {
		marginLeft: scale(50)
	},
	rowChoose: {
		marginTop: scale(30),
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center"
	},
	chooseBorder: {
		padding: scale(5),
		borderColor: globalColors.black,
		borderRadius: 20,
		borderWidth: 1
	},
	buttonView: {
		marginTop: scale(20),
		alignItems: "center"
	}
});

const mapStateToProps = (state: AppState) => ({
	gameName: state.game.gameName,
	switchColor: state.game.adminColor,
	moveTime: state.game.moveTime,
	color: state.game.adminColor
});

export default connect(mapStateToProps)(withRouter<Props>(CreateGame));
