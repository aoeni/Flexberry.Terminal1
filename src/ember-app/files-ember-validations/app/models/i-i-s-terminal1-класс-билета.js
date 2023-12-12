import {
  defineNamespace,
  defineProjections,
  Model as КлассБилетаMixin
} from '../mixins/regenerated/models/i-i-s-terminal1-класс-билета';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КлассБилетаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
