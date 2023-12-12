import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTerminal1КлассБилетаLForm from './forms/i-i-s-terminal1-класс-билета-l';
import IISTerminal1КодыLForm from './forms/i-i-s-terminal1-коды-l';
import IISTerminal1ПассажирLForm from './forms/i-i-s-terminal1-пассажир-l';
import IISTerminal1ПосадТалонLForm from './forms/i-i-s-terminal1-посад-талон-l';
import IISTerminal1РейсLForm from './forms/i-i-s-terminal1-рейс-l';
import IISTerminal1КлассБилетаEForm from './forms/i-i-s-terminal1-класс-билета-e';
import IISTerminal1КодыEForm from './forms/i-i-s-terminal1-коды-e';
import IISTerminal1ПассажирEForm from './forms/i-i-s-terminal1-пассажир-e';
import IISTerminal1ПосадТалонEForm from './forms/i-i-s-terminal1-посад-талон-e';
import IISTerminal1РейсEForm from './forms/i-i-s-terminal1-рейс-e';
import IISTerminal1ИнфБроньModel from './models/i-i-s-terminal1-инф-бронь';
import IISTerminal1КлассБилетаModel from './models/i-i-s-terminal1-класс-билета';
import IISTerminal1КодыModel from './models/i-i-s-terminal1-коды';
import IISTerminal1ПассажирModel from './models/i-i-s-terminal1-пассажир';
import IISTerminal1ПосадТалонModel from './models/i-i-s-terminal1-посад-талон';
import IISTerminal1РейсModel from './models/i-i-s-terminal1-рейс';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-terminal1-инф-бронь': IISTerminal1ИнфБроньModel,
    'i-i-s-terminal1-класс-билета': IISTerminal1КлассБилетаModel,
    'i-i-s-terminal1-коды': IISTerminal1КодыModel,
    'i-i-s-terminal1-пассажир': IISTerminal1ПассажирModel,
    'i-i-s-terminal1-посад-талон': IISTerminal1ПосадТалонModel,
    'i-i-s-terminal1-рейс': IISTerminal1РейсModel
  },

  'application-name': 'Terminal1',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Terminal1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Terminal1',
          title: 'Terminal1'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        terminal1: {
          caption: 'Terminal1',
          title: 'Terminal1',
          'i-i-s-terminal1-посад-талон-l': {
            caption: 'Посад талон',
            title: ''
          },
          'i-i-s-terminal1-класс-билета-l': {
            caption: 'Класс билета',
            title: ''
          },
          'i-i-s-terminal1-коды-l': {
            caption: 'Коды',
            title: ''
          },
          'i-i-s-terminal1-рейс-l': {
            caption: 'Рейс',
            title: ''
          },
          'i-i-s-terminal1-пассажир-l': {
            caption: 'Пассажир',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-terminal1-класс-билета-l': IISTerminal1КлассБилетаLForm,
    'i-i-s-terminal1-коды-l': IISTerminal1КодыLForm,
    'i-i-s-terminal1-пассажир-l': IISTerminal1ПассажирLForm,
    'i-i-s-terminal1-посад-талон-l': IISTerminal1ПосадТалонLForm,
    'i-i-s-terminal1-рейс-l': IISTerminal1РейсLForm,
    'i-i-s-terminal1-класс-билета-e': IISTerminal1КлассБилетаEForm,
    'i-i-s-terminal1-коды-e': IISTerminal1КодыEForm,
    'i-i-s-terminal1-пассажир-e': IISTerminal1ПассажирEForm,
    'i-i-s-terminal1-посад-талон-e': IISTerminal1ПосадТалонEForm,
    'i-i-s-terminal1-рейс-e': IISTerminal1РейсEForm
  },

});

export default translations;
