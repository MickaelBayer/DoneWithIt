import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';
import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton
} from '../components/forms';

const valisdationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
});

export default function LoginScreen() {
  const { login } = useAuth();
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async ({ email, password }) => {
    setErrorMessage(null);
    const result = await authApi.login(email, password);
    if (!result.ok) return setErrorMessage(result.data.error);
    login(result.data);
  };

  return (
    <Screen style={styles.screen}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={valisdationSchema}
      >
        <ErrorMessage error={errorMessage} visible={errorMessage !== null} />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  },
  screen: {
    padding: 10
  }
});
