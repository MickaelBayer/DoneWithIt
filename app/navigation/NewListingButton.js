import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import defaultStyle from '../config/styles';

export default function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={defaultStyle.colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultStyle.colors.primary,
    borderRadius: 40,
    height: 80,
    width: 80,
    bottom: 20,
    borderColor: defaultStyle.colors.white,
    borderWidth: 10
  }
});
