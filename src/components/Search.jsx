import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

const Search = ({ keyword, onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '90%', paddingTop: 10 }}>
        <TextInput
          onChangeText={setSearchValue}
          value={searchValue}
          style={styles.input}
          placeholder='Buscar producto'
        />
        <Pressable onPress={handleSearch}>
          <AntDesign name='search1' size={20} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginRight: 5,
    marginTop: 30,
    fontSize: 20,
  }
});

export default Search;
