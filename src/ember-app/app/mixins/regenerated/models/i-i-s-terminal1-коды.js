import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодБрони: DS.attr('string')
});

export let ValidationRules = {
  кодБрони: {
    descriptionKey: 'models.i-i-s-terminal1-коды.validations.кодБрони.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КодыE', 'i-i-s-terminal1-коды', {
    кодБрони: attr('Код брони', { index: 0 })
  });

  modelClass.defineProjection('КодыL', 'i-i-s-terminal1-коды', {
    кодБрони: attr('Код брони', { index: 0 })
  });
};
