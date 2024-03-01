import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

export default function AccountNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'card',
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen
        name="AccountPage"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Messages" component={MessagesScreen} />
    </Stack.Navigator>
  );
}
