import { FlatList, StyleSheet } from 'react-native';
import AppCard from '../components/AppCard';
import Screen from '../components/Screen';
import defaultStyles from '../config/styles';

const Listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../assets/jacket.jpg')
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 100,
    image: require('../assets/couch.jpg')
  }
];

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={Listings}
        keyExtractor={(Listing) => Listing.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subtitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: defaultStyles.colors.light
  }
});
