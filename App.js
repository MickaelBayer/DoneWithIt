import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import AppOfflineNotification from './app/components/AppOfflineNotification';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    restoreUser().then(() => {
      setTimeout(() => {
        setIsReady(true);
      });
    });
  }, []);

  if (!isReady) {
    // Keep the splash screen visible while we fetch resources
    SplashScreen.preventAutoHideAsync();
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <GestureHandlerRootView style={styles.gestureRootHandler}>
        <AppOfflineNotification />
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  gestureRootHandler: {
    flex: 1
  }
});
