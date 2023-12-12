import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-terminal1-посад-талон', 'Unit | Model | i-i-s-terminal1-посад-талон', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-terminal1-инф-бронь',
    'model:i-i-s-terminal1-класс-билета',
    'model:i-i-s-terminal1-коды',
    'model:i-i-s-terminal1-пассажир',
    'model:i-i-s-terminal1-посад-талон',
    'model:i-i-s-terminal1-рейс',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
