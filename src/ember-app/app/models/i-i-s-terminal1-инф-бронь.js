import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ИнфБроньMixin
} from '../mixins/regenerated/models/i-i-s-terminal1-инф-бронь';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ИнфБроньMixin, Validations, {
});

defineProjections(Model);

export default Model;
