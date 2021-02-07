import {DefaultTheme} from '@react-navigation/native';

const MyTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00AE5F',
    fat: '#b3b3b3',
    protein: '#868686',
    carbs: '#55b642',
  },
};

export default MyTheme;
