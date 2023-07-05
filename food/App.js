import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import showResultsScreen from "./src/screens/showResultsScreen";

const navigator = createStackNavigator({
  'Search': SearchScreen,
  'showResults': showResultsScreen
}, {
  initialRouteKey: 'Search',
  defaultNavigationOptions: {
    title: 'Buisness Search'
  }
});

export default createAppContainer(navigator)
