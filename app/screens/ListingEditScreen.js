import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton
} from '../components/forms';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import useLocation from '../hooks/useLocation';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Cateory'),
  images: Yup.array().min(1, 'Please select at least one image.')
});

const categories = [
  {
    label: 'Furniture',
    icon: 'floor-lamp',
    size: 70,
    color: '#fff',
    backgroundColor: '#fc5c65',
    value: 1
  },
  {
    label: 'Clothing',
    icon: 'shoe-heel',
    size: 70,
    color: '#fff',
    backgroundColor: '#2bcbba',
    value: 2
  },
  {
    label: 'Camera',
    icon: 'camera',
    size: 70,
    color: '#fff',
    backgroundColor: '#fed330',
    value: 3
  },
  {
    label: 'Cars',
    icon: 'car',
    size: 70,
    color: '#fff',
    backgroundColor: '#fd9644',
    value: 4
  },
  {
    label: 'Games',
    icon: 'cards',
    size: 70,
    color: '#fff',
    backgroundColor: '#26de81',
    value: 5
  },
  {
    label: 'Sports',
    icon: 'basketball',
    size: 70,
    color: '#fff',
    backgroundColor: '#45aaf2',
    value: 6
  },
  {
    label: 'Movies & Music',
    icon: 'headphones',
    size: 70,
    color: '#fff',
    backgroundColor: '#4b7bec',
    value: 7
  }
];

export default function ListingEditScreen() {
  const location = useLocation();
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: []
        }}
        onSubmit={(values) => console.log(values, location)}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" style={{ marginBottom: 20 }} />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          name="category"
          numColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15
  }
});
