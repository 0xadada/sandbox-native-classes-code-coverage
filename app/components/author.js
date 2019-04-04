import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  name: computed('model.name.length', function() {
    if(this.model.name.length) {
      return `${this.model._internalModel.clientId} / ${this.model.name}`;
    } else {
      return `no name`;
    }
  })
});
