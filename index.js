import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { HomePage } from "./src/pages/home-page/home-page";

AppRegistry.registerComponent(appName, () => {
	return HomePage;
});
