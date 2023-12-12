import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяОтправ: DS.attr('string'),
  выход: DS.attr('string'),
  дата: DS.attr('date'),
  конецПосад: DS.attr('string'),
  куда: DS.attr('string'),
  начПосад: DS.attr('string'),
  отКуда: DS.attr('string'),
  инфБронь: DS.hasMany('i-i-s-terminal1-инф-бронь', { inverse: 'рейс', async: false })
});

export let ValidationRules = {
  времяОтправ: {
    descriptionKey: 'models.i-i-s-terminal1-рейс.validations.времяОтправ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  выход: {
    descriptionKey: 'models.i-i-s-terminal1-рейс.validations.выход.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-terminal1-рейс.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  конецПосад: {
    descriptionKey: 'models.i-i-s-terminal1-рейс.validations.конецПосад.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  куда: {
    descriptionKey: 'models.i-i-s-terminal1-рейс.validations.куда.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  начПосад: {
    descriptionKey: 'models.i-i-s-terminal1-рейс.validations.начПосад.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отКуда: {
    descriptionKey: 'models.i-i-s-terminal1-рейс.validations.отКуда.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  инфБронь: {
    descriptionKey: 'models.i-i-s-terminal1-рейс.validations.инфБронь.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РейсE', 'i-i-s-terminal1-рейс', {
    дата: attr('Дата', { index: 0 }),
    куда: attr('Куда', { index: 1 }),
    отКуда: attr('От куда', { index: 2 }),
    времяОтправ: attr('Время отправления', { index: 3 }),
    начПосад: attr('Начало посадки', { index: 4 }),
    конецПосад: attr('Конец посадки', { index: 5 }),
    выход: attr('Выход', { index: 6 }),
    инфБронь: hasMany('i-i-s-terminal1-инф-бронь', 'Информация бронирования', {
      пассажир: belongsTo('i-i-s-terminal1-пассажир', 'Пассажир', {

      }, { index: 0, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('РейсL', 'i-i-s-terminal1-рейс', {
    дата: attr('Дата', { index: 0 }),
    куда: attr('Куда', { index: 1 }),
    отКуда: attr('От куда', { index: 2 }),
    времяОтправ: attr('Время отправления', { index: 3 }),
    начПосад: attr('Начало посадки', { index: 4 }),
    конецПосад: attr('Конец посадки', { index: 5 }),
    выход: attr('Выход', { index: 6 })
  });
};
