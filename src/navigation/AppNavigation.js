
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import RestaurantList from "../containers/Home";
import RestaurantDetails from "../containers/RestaurantDetails";
import FoodCart from "../containers/FoodCart";


const AppStackNavigator = createStackNavigator(
    {
        RestaurantList: { screen: RestaurantList },
        FoodCart: { screen: FoodCart },
        RestaurantDetails: { screen: RestaurantDetails },


    }, {
        // see next line
        headerMode: 'none',
    })
const App = createAppContainer(AppStackNavigator);

export default App