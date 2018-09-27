const ru = require('../locales/ru.js');

const I18N = {
  locales: [
    {
      code: 'ru',
      iso: 'ru-UA',
      name: 'рус',
    }
  ],
  defaultLocale: 'ru',
  noPrefixDefaultLocale: true,
  useRedirectCookie: false,
  seo: false,
  vueI18n: {
    fallbackLocale: 'ru',
    messages: { ru }
  }
};

module.exports = {
  I18N
};
