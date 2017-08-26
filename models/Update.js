var keystone = require('keystone');
var Types = keystone.Field.Types;

var Update = new keystone.List('Update', {
  map: {name: 'title'},
  singular: 'Update',
  plural: 'Updates',
  autokey: {path:'slug', from: 'title', unique: true}
});

Update.add({
  title: {type: String, required: true},
  location: {type: String, required: true, default:"Shanghai"},
  description: {type: Types.Html, wysiwyg: true, height: 300},
  shortdescription: {type: String},
  image: {type: Types.CloudinaryImage},
  date: {type: Date, default: Date.now}

});

Update.register();
