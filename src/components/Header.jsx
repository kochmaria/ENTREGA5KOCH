import { Text, View , StyleSheet} from "react-native";
import {colors} from "../global/colors";
function Header ({title}) {
    return (
        <View style={styles.container}> 
            <Text style ={styles.text}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray_100,
        width: '100%',
        paddingVertical: 3,
       
        
    },
    text: {
        fontSize:35, 
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'


    }
});

export default Header;