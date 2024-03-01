import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import listingsApi from '../api/listings';
import AppActivityIndicator from '../components/AppActivityIndicator';
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import defaultStyles from '../config/styles';
import useApi from '../hooks/useApi';
import routes from '../navigation/routes';

export default function ListingsScreen({ navigation }) {
  const {
    data: listings,
    error,
    loading,
    request: loadListings
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <AppActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error ? (
          <View style={styles.error}>
            <AppText>Could not retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </View>
        ) : (
          <>
            <FlatList
              data={listings}
              keyExtractor={(listing) => listing.id.toString()}
              renderItem={({ item }) => (
                <AppCard
                  title={item.title}
                  subtitle={'$' + item.price}
                  imageUrl={item.images[0].url}
                  onPress={() =>
                    navigation.navigate(routes.LISTING_DETAILS, item)
                  }
                  thumbnailUrl={item.images[0].thumbnailUrl}
                />
              )}
              refreshing={loading}
              onRefresh={() => loadListings()}
            />
          </>
        )}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: defaultStyles.colors.light
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
