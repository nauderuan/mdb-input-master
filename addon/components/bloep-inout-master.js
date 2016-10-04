import Ember from 'ember';
import layout from '../templates/components/bloep-inout-master';

export default Ember.Component.extend({
  layout,


  sVersion: "This is VVV TWO!!!!!!",


  init: function() {
    this._super(...arguments);
    console.log("ME BE MASTER");
  }
});
