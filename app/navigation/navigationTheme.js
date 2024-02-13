import { DefaultTheme } from '@react-navigation/native';
import defaultStyle from '../config/styles';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: defaultStyle.colors.primary,
    background: defaultStyle.colors.white
  }
};
