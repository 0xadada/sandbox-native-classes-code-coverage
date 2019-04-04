import Component from '@ember/component';
// import { computed } from '@ember/object';
import { computed } from '@ember-decorators/object';

export default class AuthorComponent extends Component {
  @computed('model.name.length')
  get name() {
    if (this.model.name.length) {
      return `${this.model._internalModel.clientId} / ${this.model.name}`;
    } else {
      return `no name`;
    }
  }
}
