import DeviseAuthorizer from 'ember-simple-auth/authorizers/devise';

export default DeviseAuthorizer.extend({
  identificationAttributeName: 'email',
  authorize(data, block) {
    const accessToken = data.token; //Data is the response returned by the server
    if (!Ember.isEmpty(accessToken)) {
        block('Authorization', `Bearer ${accessToken}`);
    }
}
});
