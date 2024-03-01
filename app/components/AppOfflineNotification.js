import { useNetInfo } from '@react-native-community/netinfo';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import defaultStyle from '../config/styles';
import AppText from './AppText';

export default function AppOfflineNotification() {
  const { isInternetReachable, type } = useNetInfo();
  if (type !== 'unknonw' && isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: defaultStyle.colors.primary,
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    top: Constants.statusBarHeight
  },
  text: {
    color: defaultStyle.colors.white
  }
});
