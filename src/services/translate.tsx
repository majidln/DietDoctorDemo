import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';
import en from '@assets/locales/en';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.missingBehaviour = 'guess';
I18n.translations = {
  en,
};

export default I18n;
