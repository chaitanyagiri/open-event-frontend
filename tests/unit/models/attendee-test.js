import { moduleForModel, test } from 'ember-qunit';

moduleForModel('attendee', 'Unit | Model | attendee', {
  // Specify the other units that are required for this test.
  needs: ['model:ticket', 'model:event', 'model:user',  'model:order']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
