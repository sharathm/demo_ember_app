import { computed } from '@ember/object';
import { Ability } from 'ember-can';

export default Ability.extend({
  canEnlarge: true,
  canFilter: true,
  canList : true
});
