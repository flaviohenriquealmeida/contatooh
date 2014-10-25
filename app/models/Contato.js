var mongoose = require('mongoose');
module.exports = function() {
  var schema = mongoose.Schema({
    nome: { 
      type: String, 
      required: true
    }, 
    email: {
      type: String, 
      required: true, 
      index: {
        unique: true
      }
    }, 
    emergencia: {
      type: mongoose.Schema.ObjectId, 
      ref: 'Contato' 
    }
  });

/*
  schema.pre('save', function(next) {
    console.log('chamou callback');
    var hoje = Date.now;
    this.alteracao = hoje;
    if(!this.inclusao) {
      this.inclusao = hoje;
    }
    console.log(this);
    next();
  });
  */
  return mongoose.model('Contato', schema);
};