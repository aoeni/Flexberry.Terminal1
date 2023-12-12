import {
  defineNamespace,
  defineProjections,
  Model as ПассажирMixin
} from '../mixins/regenerated/models/i-i-s-terminal1-пассажир';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПассажирMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
