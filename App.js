import React, { useState } from 'react';
import Home from './src/screens/Home';
import ItemListCategories from './src/screens/ItemListCategories';
import ItemDetail from './src/screens/ItemDetail';
import { SafeAreaView, StatusBar, StyleSheet, Platform } from 'react-native';
import Constants from 'expo-constants'; 

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [productDetailId, setProductDetailId] = useState(0);

  const returnToCategories = () => {
    setProductDetailId(0); 
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {productDetailId ? (
        <ItemDetail productDetailId={productDetailId} returnToCategories={returnToCategories} />
      ) : categorySelected ? (
        <ItemListCategories 
          setCategorySelected={setCategorySelected} 
          category={categorySelected}
          setProductDetailId={setProductDetailId}
        />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0, 
  },
});

