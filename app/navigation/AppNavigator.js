import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import defaultStyles from '../config/styles';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountNavigator from './AccountNavigator';
import FeedNavigator from './FeedNavigator';
import NewListingButton from './NewListingButton';
import routes from './routes';

export default function AppNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: defaultStyles.colors.white,
        tabBarActiveTintColor: defaultStyles.colors.primary,
        tabBarInactiveBackgroundColor: defaultStyles.colors.white,
        tabBarInactiveTintColor: defaultStyles.colors.medium,
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Listing Edit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          )
        })}
      />
      <Tab.Screen
        name="AccountTab"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}
