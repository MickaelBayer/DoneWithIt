import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';
import PickerItem from '../PickerItem';
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({
  items,
  name,
  numColumns,
  PickerItemComponent = PickerItem,
  placeholder
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        numColumns={numColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
