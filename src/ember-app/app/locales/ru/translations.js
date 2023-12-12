import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Terminal1',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Terminal1',
          title: 'Terminal1'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
