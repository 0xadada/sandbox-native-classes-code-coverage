import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  model() {
    const authorA = this.store.createRecord('author', { name: '0xADADA'});
    const authorB = this.store.createRecord('author', { name: '0xAEAEA'});
    const authorC = this.store.createRecord('author', { name: ''});
    return [authorA, authorB, authorC]
  }
}
