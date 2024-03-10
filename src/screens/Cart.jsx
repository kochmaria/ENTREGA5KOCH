import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import allCartItems from '../data/cart.json';
import CartItem from '../components/CartItem';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setCartItems(allCartItems);
        calculateTotal(allCartItems);
    }, []);

    const style =calculateTotal = (items) => {
        const totalPrice = items.reduce((acc, currentItem) => {
            const price = parseFloat(currentItem.price.split(' ')[1]);
            return acc + (currentItem.quantity * price);
        }, 0);
        setTotal(totalPrice);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartItem item={item} />}
                keyExtractor={(cartItem) => cartItem.id}
            />
            <Text style={styles.total}>Total: <Text style={styles.totalAmount}>${total.toFixed(2)}</Text> ARS </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '', 
    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
        backgroundColor: "#D1BECF"
    },
    totalAmount: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
       
    },
});

export default Cart;
