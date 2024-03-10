
import { ScrollView, View } from 'react-native';
import Header from '../components/Header';
import Categories from '../components/Categories';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Header title={'Home'} />
      
        <Categories navigation={navigation} />
      </ScrollView>
    </View>
  );
}

export default Home;
