import {
  defineNamespace,
  defineProjections,
  Model as ИнфБроньMixin
} from '../mixins/regenerated/models/i-i-s-terminal1-инф-бронь';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ИнфБроньMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
