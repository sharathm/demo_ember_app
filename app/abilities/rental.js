import { computed } from '@ember/object';
import { Ability } from 'ember-can';

export default Ability.extend({
  canEnlarge: false,
  canFilter: true,
  canList : true
});
