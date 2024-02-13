import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingsScreen from '../screens/ListingsScreen';

export default function FeedNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'modal',
        animation: 'slide_from_bottom',
        gestureEnabled: true, // not working on android
        gestureDirection: 'vertical'
      }}
    >
      <Stack.Screen
        name="Listings"
        component={ListingsScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Listing Details" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
}
