import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable, ScrollView } from 'react-native';
import allProducts from '../data/productos.json';
import { AntDesign } from '@expo/vector-icons';

import Card from '../components/Card'; 

const ItemDetail = ({ navigation, route }) => { 
    const [product, setProduct] = useState(null);

    
    const { id } = route.params;

    useEffect(() => {
        const productFound = allProducts.find(product => product.id === id);
        setProduct(productFound);
    }, [id]); 

    if (!product) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.contentContainer}>
                <Pressable style={styles.returnButton} onPress={() => navigation.goBack()}>
                    
                </Pressable>
                <Card style={styles.card}>
                    <Text style={styles.title}>{product.title}</Text>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: product.image }} />
                    </View>
                    <Text style={styles.description}>{product.description}</Text>
                    <Text style={styles.price}>Price: {product.price}</Text>
                </Card>
                <Pressable style={styles.buyNowButton} onPress={() => console.log('Buy Now pressed')}>
                    <Text style={styles.buyNowText}>Buy Now</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
   
   
    card: {
        width: '90%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 4.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'green',
        marginBottom: 10,
    },
    image: {
        width: 200,
        height: 200,
    },
    buyNowButton: {
        backgroundColor: '#878787',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buyNowText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ItemDetail;
