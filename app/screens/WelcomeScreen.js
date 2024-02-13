import { useNavigation } from '@react-navigation/native';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import routes from '../navigation/routes';

const backround = require('../assets/background.jpg');
const logo = require('../assets/logo-red.png');

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={backround} style={styles.backround} blurRadius={7}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title={'login'}
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <AppButton
          title={'register'}
          color="secondary"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backround: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonsContainer: {
    padding: 20,
    width: '100%'
  },
  logo: {
    width: 100,
    height: 100
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center'
  },
  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20
  }
});
