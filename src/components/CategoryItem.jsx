import Card from './Card';
import {View, StyleSheet, Text, Pressable} from 'react-native';


const CategoryItem = ({category, setCategorySelected }) => {
    return (
        <>
           <Card>
             <Pressable onPress={()=>setCategorySelected(category)}>
               <Text style= {styles.text}>{category}</Text>
             </Pressable>
           </Card>
        </>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    },
 
});



export default CategoryItem;