import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { set } from '@ember/object';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | author', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    let author = {
      name: '0xadada',
      _internalModel: { clientId: 1 }
    };
    set(this, 'model', author);
    await render(hbs`<Author @tagName="li" @model={{model}} />`);

    assert.dom('li').includesText('0xadada');
  });
});
