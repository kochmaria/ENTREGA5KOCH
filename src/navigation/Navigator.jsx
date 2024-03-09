
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import ItemDetail from '../screens/ItemDetail';
import ItemListCategories from '../screens/ItemListCategories';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
        <Stack.Screen name="ItemListCategories" component={ItemListCategories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
