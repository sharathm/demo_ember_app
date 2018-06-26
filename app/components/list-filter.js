import Component from '@ember/component';
import { ability } from 'ember-can/computed';
import { inject as service } from '@ember/service';
export default Component.extend({
  can: service(), // inject can service
  classNames: ['list-filter'],
  value : '',
  init() {
    this._super(...arguments);
    this.get('filter')('').then((allResults) => {
      this.set('results', allResults.results);
    });
  },
  ability : ability('rental'),
  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => {
        if (filterResults.query === this.get('value')) {
          this.set('results', filterResults.results);
        }
      });
    }
  }
});
