import { inject as service } from '@ember/service';
import { Ability } from 'ember-can';
import { computed } from '@ember/object';
export default Ability.extend({
  session: service(),
  canList: true,
  canFilter: true
});
