import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Cart from '../screens/Cart'
const Stack = createNativeStackNavigator()

const CartStack = () => {
    return (
        <Stack.Navigator>
         <Stack.Screen name="Cart" component={Cart}/>

        </Stack.Navigator>
    )

}