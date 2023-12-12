import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-terminal1-коды', 'Unit | Serializer | i-i-s-terminal1-коды', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-terminal1-коды',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-terminal1-вид-билета',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
