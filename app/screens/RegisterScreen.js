import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import authApi from '../api/auth';
import userApi from '../api/users';
import useAuth from '../auth/useAuth';
import AppActivityIndicator from '../components/AppActivityIndicator';
import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton
} from '../components/forms';
import useApi from '../hooks/useApi';

const valisdationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
});

export default function RegisterScreen() {
  const registerApi = useApi(userApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    console.log(userInfo);
    const result = await registerApi.request(userInfo);
    console.log(result);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError('An unexpected error occurred.');
        console.log(result); // should use a login service
      }
      return;
    }

    // Login
    const { data: token } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.login(token);
  };

  return (
    <>
      <AppActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.screen}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <AppForm
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={valisdationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
            textContentType="name"
          />
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
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
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
