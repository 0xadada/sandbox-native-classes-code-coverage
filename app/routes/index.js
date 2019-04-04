import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const authorA = this.store.createRecord('author', { name: '0xADADA'});
    const authorB = this.store.createRecord('author', { name: '0xAEAEA'});
    return [authorA, authorB]
  }
});
