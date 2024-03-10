import { FlatList, View } from 'react-native';
import categoriesData from '../data/categories.json';
import CategoryItem from './CategoryItem';
import Counter from './Counter';

const Categories = ({ navigation }) => {
  return (
    <View>
      <Counter/>
      <FlatList
        data={categoriesData}
        renderItem={({ item }) => (
          <CategoryItem navigation={navigation} category={item} />
        )}
        keyExtractor={(category) => category} 
      />
    </View>
  );
}

export default Categories;