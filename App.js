import { createStackNavigator, createAppContainer } from 'react-navigation';

import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
const navigator=createStackNavigator({
      SearchScreen:SearchScreen,
        ResultsShowScreen:ResultsShowScreen
} ,{
    initialRouteName: 'SearchScreen',
        defaultNavigationOptions: {
        title: 'SearchMeal'
    }
}
);

export default createAppContainer(navigator);
