import Card from './Card';
import {View, StyleSheet, Text} from 'react-native';


const ProductItem = ({product}) => {
    return (
        <>
           <Card>
             <Text style= {styles.text}>{product.title}</Text>
           </Card>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    },
 
});



export default ProductItem;