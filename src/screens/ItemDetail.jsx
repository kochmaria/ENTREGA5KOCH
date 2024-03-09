import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, Pressable, ScrollView } from 'react-native';
import allProducts from '../data/productos.json';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../global/colors';
import Card from '../components/Card'; // Importamos el componente de tarjeta

const ItemDetail = ({ productDetailId, returnToCategories }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const productFound = allProducts.find(product => product.id === productDetailId);
        setProduct(productFound);
    }, [productDetailId]); 

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
                <Pressable style={styles.returnButton} onPress={returnToCategories}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                    <Text style={styles.returnText}>Go Back </Text>
                </Pressable>
                <Card style={styles.card}>
                   <Text style={styles.title}>{product.title}</Text>
                  <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{ uri: product.image }} />
                   </View>
                  <Text style={styles.description}>{product.description}</Text>
                   <Text style={styles.price}>Price: {product.price}</Text>
                </Card>
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
    returnButton: {
        flexDirection: 'row',
        
        
        justifyContent: 'center',
        backgroundColor: '#ddd',
        padding: 5,
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
       justifyContent: 'flex-end',
        marginTop: 10,
    },
    returnText: {
        marginLeft: 5,
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
    

   }
});

export default ItemDetail;




