var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var user = '';
var url = 'mongodb://localhost:27017/insurance';
var api_key = 'key-cd6a3c9d6c483cfad3c1bbea5aab8248';
var domain = 'sandbox092d740f327c4bf08b6fd353c3ea3657.mailgun.org';
var mailgun = require('mailgun-js')({
    apiKey: api_key,
    domain: domain
});
app.use(bodyParser.json());
app.use(express.static('.'));
var schedule = require('node-schedule');
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
app.post('/1', function(req, res) {
    console.log("success");
    var email = req.body.regemail;
    var pass = req.body.regpass;
    console.log(email + "," + pass);
    res.send("ssuccess");
    MongoClient.connect(url, function(err, db) {
        if (!err) {
            console.log("We are connected");
            var collection = db.collection('user');
            var user = [{
                'email': email,
                'password': pass,
                'rate': '0',
                'duedate': '1/1/1'
            }];
            console.log(user);
            db.collection('user').insert(user, function(err, result) {
                if (!err) {
                    console.log("insert successful");
                    var data = {
                        from: 'Ace Insurance <me@samples.mailgun.org>',
                        to: email,
                        subject: 'Welcome to Ace insurance',
                        text: 'Your account has been created !!!'
                    };

                    mailgun.messages().send(data, function(error, body) {
                        console.log("sent successfully");
                    });
                    db.close();
                }
            })
        }
    });
});
app.post('/login', function(req, res) {
    console.log("login ");
    var email = req.body.email;
    var pass = req.body.password;
    var arr = [];

    console.log(email + "," + pass);
    MongoClient.connect(url, function(err, db) {
        if (!err) {
            var collection = db.collection('user');
            console.log("we are connected");
            collection.findOne({
                email: email,
                password: pass
            }, function(error, result) {
                if (result == null) {
                    res.send("not exist");
                    db.close();
                }
                res.send("exsit");
                user = email;
                db.close();
            });
        }
    })
});
app.post('/insurance', function(req, res) {
    console.log("purchase");
    var rate = req.body.rate;
    var date = new Date();
    date.setDate(date.getDate() + 30)
    MongoClient.connect(url, function(err, db) {
        if (!err) {
            var collection = db.collection('user');
            collection.updateOne({
                "email": user
            }, {
                $set: {
                    "rate": rate,
                    "duedate": date
                },
            }, function(err, results) {
                console.log(results);
            });
        }
        db.close();
    });
    var data = {
        from: 'Ace Insurance <me@samples.mailgun.org>',
        to: user,
        subject: 'You are insured',
        text: 'You have successfully purchased the insurance'
    };

    mailgun.messages().send(data, function(error, body) {
        console.log("sent successfully");
    });

    res.send("success");
});
app.listen(3000);