// Home.jsx
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Categories from '../components/Categories';

function Home({ setCategorySelected }) {
  return (
    <View style={{ flex: 1 }}>
      <Header title={'Home'} />
      <Categories setCategorySelected={setCategorySelected} />
    </View>
  );
}

export default Home;