import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import PickerItem from './PickerItem';

export default function AppPicker({
  icon,
  items,
  numColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.name}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
          numColumns={numColumns}
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              label={item.name}
              onPress={() => {
                onSelectItem(item);
                setModalVisible(false);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center'
  },
  icon: {
    marginRight: 10
  },
  placeholder: {
    flex: 1,
    color: defaultStyles.colors.medium
  },
  text: {
    flex: 1,
    color: defaultStyles.colors.dark
  }
});
