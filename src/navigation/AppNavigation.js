
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import RestaurantList from "../containers/Home";
import RestaurantDetails from "../containers/RestaurantDetails";


const AppStackNavigator = createStackNavigator(
    {
        RestaurantList: { screen: RestaurantList },
        RestaurantDetails: { screen: RestaurantDetails },


    }, {
        // see next line
        headerMode: 'none',
    })
const App = createAppContainer(AppStackNavigator);

export default App