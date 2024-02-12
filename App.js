import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Screen from './app/components/Screen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.gestureRootHandler}>
      <Screen>
        <ListingEditScreen />
      </Screen>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  gestureRootHandler: {
    flex: 1
  },
  image: {
    width: 200,
    height: 200
  }
});
