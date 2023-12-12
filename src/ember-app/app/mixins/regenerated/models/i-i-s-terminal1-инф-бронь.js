import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  пассажир: DS.belongsTo('i-i-s-terminal1-пассажир', { inverse: null, async: false }),
  рейс: DS.belongsTo('i-i-s-terminal1-рейс', { inverse: 'инфБронь', async: false })
});

export let ValidationRules = {
  пассажир: {
    descriptionKey: 'models.i-i-s-terminal1-инф-бронь.validations.пассажир.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  рейс: {
    descriptionKey: 'models.i-i-s-terminal1-инф-бронь.validations.рейс.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ИнфБроньE', 'i-i-s-terminal1-инф-бронь', {
    пассажир: belongsTo('i-i-s-terminal1-пассажир', 'Код бронирования', {
      коды: belongsTo('i-i-s-terminal1-коды', '', {
        кодБрони: attr('Код бронирования', { index: 0 })
      }, { index: -1, hidden: true }),
      фИО: attr('ФИО', { index: 2, hidden: true }),
      классБилета: belongsTo('i-i-s-terminal1-класс-билета', '', {
        класс: attr('Класс билета', { index: 3 }),
        место: attr('Место', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: 1 })
  });
};
