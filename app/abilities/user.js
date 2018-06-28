import { inject as service } from '@ember/service';
import { Ability } from 'ember-can';
import { computed } from '@ember/object';
export default Ability.extend({
  session: service(),
  canShowContact: computed('user.showContact', function () {
    return this.get('session.data.authenticated.showContact');
  }),
  canShowAbout: computed('user.showAbout', function () {
    return this.get('session.data.authenticated.showAbout');
  })
});
