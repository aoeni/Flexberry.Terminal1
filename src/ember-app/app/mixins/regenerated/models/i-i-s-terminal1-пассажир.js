import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  классБилета: DS.belongsTo('i-i-s-terminal1-класс-билета', { inverse: null, async: false }),
  коды: DS.belongsTo('i-i-s-terminal1-коды', { inverse: null, async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-terminal1-пассажир.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  классБилета: {
    descriptionKey: 'models.i-i-s-terminal1-пассажир.validations.классБилета.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  коды: {
    descriptionKey: 'models.i-i-s-terminal1-пассажир.validations.коды.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПассажирE', 'i-i-s-terminal1-пассажир', {
    фИО: attr('ФИО', { index: 0 }),
    классБилета: belongsTo('i-i-s-terminal1-класс-билета', 'Класс билета', {
      место: attr('Место', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'место' }),
    коды: belongsTo('i-i-s-terminal1-коды', 'Коды', {
      кодБрони: attr('Код брони', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'кодБрони' })
  });

  modelClass.defineProjection('ПассажирL', 'i-i-s-terminal1-пассажир', {
    фИО: attr('ФИО', { index: 0 }),
    коды: belongsTo('i-i-s-terminal1-коды', 'Код брони', {
      кодБрони: attr('Код брони', { index: 1 })
    }, { index: -1, hidden: true }),
    классБилета: belongsTo('i-i-s-terminal1-класс-билета', 'Место', {
      место: attr('Место', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
