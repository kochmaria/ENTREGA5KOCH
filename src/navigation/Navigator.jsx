import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Home from "../screens/Home";
import ItemDetail from '../screens/ItemDetail';
import ItemListCategories from '../screens/ItemListCategories';

const Stack = createNativeStackNavigator();

// Componente personalizado para el header
const CustomHeader = ({ title, navigation }) => {
  return (
    <View style={styles.headerContainer}>
      {navigation.canGoBack && (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={({ route, navigation }) => ({
          header: () => {
            let title = route.name === 'Home' ? 'HOME' : 'Details';
            if (route.name === 'ItemListCategories' && route.params && route.params.category) {
              title = route.params.category;
            }
            return <CustomHeader title={title} navigation={navigation} />;
          }
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
        <Stack.Screen name="ItemListCategories" component={ItemListCategories} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Navigator;
