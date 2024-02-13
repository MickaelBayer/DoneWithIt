import { Image, StyleSheet, View } from 'react-native';

import AppText from '../components/AppText';
import { ListItem } from '../components/lists';
import defaultStyles from '../config/styles';

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image source={listing.image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.subtitle}>${listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title="Mosh Hamedani"
            subtitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 300
  },
  subtitle: {
    color: defaultStyles.colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  userContainer: {
    marginVertical: 40
  }
});
