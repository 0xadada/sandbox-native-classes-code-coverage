import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  idName: computed('model.length', function() {
    return `${this.model._internalModel.clientId} / ${this.model.name}`;
  })
});
