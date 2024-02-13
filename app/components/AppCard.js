import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

export default function AppCard({ title, subtitle, imageUrl, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden'
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 200
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold'
  },
  title: {
    marginBottom: 7
  }
});
