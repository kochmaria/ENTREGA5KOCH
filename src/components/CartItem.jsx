
import { View, StyleSheet, Text } from 'react-native';

const CartItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text>{item.title}</Text>
            <Text>{item.brand}</Text>
            <Text>{item.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default CartItem;
