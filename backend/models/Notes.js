const mongoose = require('mongoose');


const NotesSchema = new Schema({
     
      title:{
            type: String,
            required: true
      },
      description:{
            type: String,
            required: true,
      },
      tag:{
            type: String,
            required: 'General'
      },
      date:{
            type: date,
            default: date.now
      },
      }
    );

    module.exports = mongoose.model('User', NotesSchema);