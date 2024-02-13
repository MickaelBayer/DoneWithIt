import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import { useEffect, useState } from 'react';
import categoriesApi from '../api/categories';
import listingsApi from '../api/listings';
import CategoryPickerItem from '../components/CategoryPickerItem';
import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton
} from '../components/forms';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';
import useApi from '../hooks/useApi';
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().label('Cateory'),
  images: Yup.array().min(1, 'Please select at least one image.')
});

export default function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const getCategoriesApi = useApi(categoriesApi.getCategories);
  useEffect(() => {
    getCategoriesApi.request();
  }, []);
  const categories = getCategoriesApi.data;

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.postListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert('Could not save the listing.');
    }

    resetForm();
  };

  return (
    <Screen style={styles.screen}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: []
        }}
        onSubmit={handleSubmit}
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
