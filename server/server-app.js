var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('port', (process.env.PORT || 5000));

mongoose.connect('mongodb://localhost/pets');
mongoose.model('Pets', new Schema({'name' : String, 'type' : String, 'age' : Number, 'image' : String}));
var Pet = mongoose.model('Pets');

app.get('/pets', function(req, res){
    Pet.find({}, function(err, data){
        if(err){
            console.log(err);
        }
        res.send(data);
    });
});

app.post('/pets', function(req, res){
    var addedPet = new Pet({'name' : req.body.name, 'type' : req.body.type, 'age' : req.body.age, 'image' : req.body.image});
    addedPet.save(function(err, data){
        if(err){
            console.log(err);
        }
        res.send(data);
    });
});

app.get('/*', function(req, res){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(app.get('port'), function(){
    console.log('listening on port #', app.get('port'));
});

module.exports = app;
