import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import IntroScreen from "../screens/IntroScreen";
import SettingsInput from "../screens/SettingsInput";
import { View, StyleSheet } from "react-native";
import CreateGame from "../screens/CreateGame";
import GamesScreen from "../screens/GamesScreen";

const Router = () => {
	return (
		<NativeRouter>
			<View style={style.container}>
				<Route exact path="/" component={IntroScreen} />
				<Route path="/settingsInput" component={SettingsInput} />
				<Route path="/createGame" component={CreateGame} />
				<Route path="/gamesScreen" component={GamesScreen} />
			</View>
		</NativeRouter>
	);
};

const style = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default Router;
