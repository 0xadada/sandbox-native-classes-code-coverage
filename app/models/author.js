import DS from 'ember-data';
import { attr } from '@ember-decorators/data';

const { Model } = DS;

export default class AuthorModel extends Model {
  @attr('string')
  name
}
