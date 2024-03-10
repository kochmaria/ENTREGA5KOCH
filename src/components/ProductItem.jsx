
import {  StyleSheet, Text, Image, useWindowDimensions, Pressable } from 'react-native';
import Card from './Card';
import { colors } from '../global/colors'; 

const ProductItem = ({ product, navigation  }) => { 
    const {width, height} = useWindowDimensions ();
    console.log (width, height); 




  return (
    <>
      <Pressable onPress={() =>  navigation.navigate("ItemDetail", {id: product.id}) } >
        <Card>
           <Text style={ width < 400 ? styles.titleMin : styles.title}>{product.title}</Text>
      
           <Image style= {  styles.image} source={{uri: product.image}} />
           <Text style={ width < 400 ? styles.priceMin : styles.price}>Price: {product.price}</Text>
        </Card>
       </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 5,
      width: 80
    },
    titleMin: {
        fontSize: 19,
      fontWeight: 'bold',
      marginBottom: 5,
      width: "80%"
    },
    price: {
      color: colors.pink_300, 
      marginBottom: 5,
      fontSize: 20,
      width: 95
    },
    priceMin: {
        color: colors.pink_300, 
        marginBottom: 5,
        fontSize: 16,
        width: "95%",
        fontWeight: 'bold'
        

    },
    
    image : {
        width: "70%",
        height: 153
    },
   
  });
  
  export default ProductItem;