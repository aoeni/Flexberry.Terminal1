import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КодыMixin
} from '../mixins/regenerated/models/i-i-s-terminal1-коды';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КодыMixin, Validations, {
});

defineProjections(Model);

export default Model;
