import {
  defineNamespace,
  defineProjections,
  Model as КодыMixin
} from '../mixins/regenerated/models/i-i-s-terminal1-коды';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КодыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
