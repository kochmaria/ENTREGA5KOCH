
import { ScrollView, View } from 'react-native';
import Categories from '../components/Categories';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Categories navigation={navigation} />
      </ScrollView>
    </View>
  );
}

export default Home;
