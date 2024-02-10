import React from 'react';
import { StyleSheet } from 'react-native';
import defaultStyles from '../../config/styles';
import AppText from '../AppText';

export default function ErrorMessage({ error, visible }) {
  if (!error || !visible) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: defaultStyles.colors.danger
  }
});
