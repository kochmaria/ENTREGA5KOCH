import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Cart from '../screens/Cart'
const Stack = createNativeStackNavigator()
import Header from "../components/Header"

const CartStack = () => {
    return (
        <Stack.Navigator 
          initialRouteName="Cart"
          screenOptions={{ header: () => <Header title="Cart" /> }}
          
          
        >
         
         <Stack.Screen name="Cart" component={Cart}/>

        </Stack.Navigator>
    )

}

export default CartStack