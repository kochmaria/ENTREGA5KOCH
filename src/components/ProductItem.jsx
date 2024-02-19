
import { View, StyleSheet, Text } from 'react-native';
import Card from './Card';
import { colors } from '../global/colors'; 

const ProductItem = ({ product }) => {
  return (
    <Card>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>Price: {product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    price: {
      color: colors.pink_300, 
      marginBottom: 5,
      fontSize: 20,
    },
    description: {
      color: colors.pink_400, 
    },
  });
  
  export default ProductItem;