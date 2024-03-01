import LottieView from 'lottie-react-native';
import { StyleSheet, View } from 'react-native';

export default function AppActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require('../assets/animations/loader.json')}
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    zIndex: 1,
    opacity: 0.8
  }
});
