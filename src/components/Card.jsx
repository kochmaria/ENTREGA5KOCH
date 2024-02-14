
import { View, StyleSheet } from 'react-native';
import {colors} from '../global/colors'
const Card = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.pink_100,
        padding: 50,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 20,
    },
});

export default Card; // Exportación por defecto aquí

