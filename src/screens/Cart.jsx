import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import allCartItems from '../data/cart.json';
import CartItem from '../components/CartItem';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(allCartItems);
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                
                renderItem={({ item }) => <CartItem item= {item}/> } 
                keyExtractor={(cartItem) => cartItem.id}
                    
                
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default Cart;
