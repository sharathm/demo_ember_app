import Component from '@ember/component';
import { ability } from 'ember-can/computed';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
export default Component.extend({
  can: service(), // inject can service
  isWide: false,
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    }
  }
});
