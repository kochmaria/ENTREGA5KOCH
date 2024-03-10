import { StyleSheet, Text, Pressable } from 'react-native';
import Card from './Card';

const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("ItemListCategories", { category })}>
      <Card>
        <Text style={styles.text}>{category}</Text>
      </Card>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25
  }
});

export default CategoryItem;