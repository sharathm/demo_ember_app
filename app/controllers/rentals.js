import Controller from '@ember/controller';
import { ability } from 'ember-can/computed';
import { inject as service } from '@ember/service';
export default Controller.extend({
  can: service(), // inject can service
  ability : ability('rental'),
  actions: {
    filterByCity(param) {
      if (param !== '') {
        return this.get('store')
          .query('rental', { city: param }).then((results) => {
            return { query: param, results: results };
          });
      } else {
        return this.get('store')
          .findAll('rental').then((results) => {
            return { query: param, results: results };
          });
      }
    }
  }
});
