import { View } from 'react-native';
import Header from '../components/Header';
import Categories from '../components/Categories';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header title={'Home'} />
      <Categories navigation={navigation} />
    </View>
  );
}

export default Home;
