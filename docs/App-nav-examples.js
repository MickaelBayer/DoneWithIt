import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Screen from './app/components/Screen';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="click" onPress={() => navigation.navigate('TweetDetails')} />
  );
};

const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Button
        title="View tweet"
        onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
      />
    </Screen>
  );
};

const TweetDetails = ({ route }) => {
  return (
    <Screen>
      <Text>Tweet details {route.params.id}</Text>
    </Screen>
  );
};

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'dodgerblue' },
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen
        name="Tweets"
        options={{ headerShown: false }}
        component={Tweets}
      />
      <Stack.Screen
        options={({ route }) => ({
          title: 'Tweet Details ' + route.params.id
        })}
        name="TweetDetails"
        component={TweetDetails}
      />
    </Stack.Navigator>
  );
};

const Account = () => (
  <Screen>
    <Text>Account comp</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: 'tomato',
      tabBarActiveTintColor: 'white',
      tabBarInactiveBackgroundColor: '#eee',
      tabBarInactiveTintColor: 'black'
    }}
  >
    <Tab.Screen
      name="Feed"
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        )
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <GestureHandlerRootView style={styles.gestureRootHandler}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureRootHandler: {
    flex: 1
  }
});
