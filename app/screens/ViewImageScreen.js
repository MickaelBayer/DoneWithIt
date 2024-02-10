import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';

import colors from '../config/colors';

const image = require('../assets/background.jpg');

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={35}
        />
      </View>

      <Image
        source={require('../assets/chair.jpg')}
        resizeMode="contain"
        style={styles.image}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 70,
    left: 30
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  deleteIcon: {
    position: 'absolute',
    top: 70,
    right: 30
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
  }
});
