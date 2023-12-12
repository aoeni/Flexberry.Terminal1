import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВидБилетаEnum from '../enums/i-i-s-terminal1-вид-билета';

export default FlexberryEnum.extend({
  enum: ВидБилетаEnum,
  sourceType: 'IIS.Terminal1.ВидБилета'
});
