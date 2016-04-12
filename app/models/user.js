import Model from 'ember-data/model';

export default Model.extend({
  username: DS.attr(), //this must be identical to BGG username
  firstName: DS.attr(),
  lastName: DS.attr(),
  address: DS.attr(),
  email: DS.attr(),
  lat: DS.attr('number'), //generated by google maps geocoding
  lng: DS.attr('number'),
  collection: DS.hasMany('game', {inverse:"ownedBy"}, {async:true}),
  wantToPlay: DS.hasMany('game', {inverse:"willingPlayers"}, {async:true}),
  groups: DS.hasMany('group', {inverse:"members"}, {async:true}),
  host: DS.attr('boolean'),
  notes: DS.attr()
});