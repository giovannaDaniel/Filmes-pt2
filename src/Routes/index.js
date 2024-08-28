import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";

import Home from '../screens/Home'

export default function Route(){

        const stack = createStackNavigator();

    return(

        <stack.Navigator>
            
            <stack.Screen name='Home' component={Home}/>

        </stack.Navigator>
       
    );
}