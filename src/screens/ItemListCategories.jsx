import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import ProductItem from '../components/ProductItem';
import { useSelector } from 'react-redux';
import RemoveModal from '../components/RemoveModal';
import { AntDesign } from '@expo/vector-icons';

function ItemListCategories({ navigation }) {
  const productsFilteredByCategory = useSelector(state => state.shopReducer.value.productsFilteredByCategory);
  const [keyword, setKeyword] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const filtered = productsFilteredByCategory.filter(product => product.title.includes(keyword));
    setFilteredProducts(filtered);
  }, [productsFilteredByCategory, keyword]);

  const handleAddProduct = product => {
    console.log('Product added:', product);
  };

  const handleRemoveProduct = product => {
    setSelectedProduct(product);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setKeyword}
          value={keyword}
          placeholder="Search product"
        />
        <Pressable style={styles.searchIcon} onPress={() => console.log('Search pressed')}>
          <AntDesign name="search1" size={24} color="black" />
        </Pressable>
      </View>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <ProductItem product={item} navigation={navigation} />
            <View style={styles.buttonContainer}>
              <Pressable onPress={() => handleAddProduct(item)}>
                <Text style={styles.addButton}>Add</Text>
              </Pressable>
              <Pressable onPress={() => handleRemoveProduct(item)}>
                <Text style={styles.removeButton}>Remove</Text>
              </Pressable>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      {selectedProduct && (
        <RemoveModal
          modalVisible={selectedProduct !== null}
          closeModal={() => setSelectedProduct(null)}
          removeItem={() => {
            console.log('Product removed:', selectedProduct);
            setSelectedProduct(null);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    flex: 1,
    marginTop: 20,
  },
  searchIcon: {
    marginLeft: 10,
  },
  productContainer: {
    flexDirection: 'column',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  addButton: {
    color: 'green',
    fontSize: 16,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  removeButton: {
    color: 'red',
    fontSize: 16,
    paddingHorizontal: 10,
  },
});

export default ItemListCategories;
