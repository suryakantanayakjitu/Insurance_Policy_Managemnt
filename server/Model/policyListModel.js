var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/InsurancePolicy');

var Schema = mongoose.Schema;

var PolicyListsModelSchema = new Schema(
    {   
        PolicyCategory: String,
        Premium: String

    }, 
    { versionKey: false  } );

var PolicyListModel = mongoose.model('policylists', PolicyListsModelSchema );

// Exporting PolicyListModel 
module.exports = PolicyListModel;