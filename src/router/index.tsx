import React from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import IntroScreen from "../screens/IntroScreen";
import SettingsInput from "../screens/SettingsInput";
import { View, StyleSheet } from "react-native";
import CreateGame from "../screens/CreateGame";
import GamesScreen from "../screens/GamesScreen";
import AdminGame from "../screens/AdminGame";
import PlayerGame from "../screens/PlayerGame";

const Router = () => {
	return (
		<NativeRouter>
			<View style={style.container}>
				<Route exact path="/" component={IntroScreen} />
				<Route path="/settingsInput" component={SettingsInput} />
				<Route path="/createGame" component={CreateGame} />
				<Route path="/gamesScreen" component={GamesScreen} />
				<Route path="/adminGame" component={AdminGame} />
				<Route path="/playerGame" component={PlayerGame} />
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
