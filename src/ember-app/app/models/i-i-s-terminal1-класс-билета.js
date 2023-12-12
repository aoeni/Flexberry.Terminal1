import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КлассБилетаMixin
} from '../mixins/regenerated/models/i-i-s-terminal1-класс-билета';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КлассБилетаMixin, Validations, {
});

defineProjections(Model);

export default Model;
