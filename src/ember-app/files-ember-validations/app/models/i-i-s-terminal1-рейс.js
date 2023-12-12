import {
  defineNamespace,
  defineProjections,
  Model as РейсMixin
} from '../mixins/regenerated/models/i-i-s-terminal1-рейс';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РейсMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
