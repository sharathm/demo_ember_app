import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
export default DS.JSONAPIAdapter.extend(DataAdapterMixin,{
  namespace: 'api',
  authorizer: 'authorizer:devise',
  handleResponse(status, headers, payload, requestData) {
    console.log(payload);
    return this._super(...arguments);
  }
});
