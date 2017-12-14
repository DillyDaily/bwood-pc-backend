var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

//USER - Get Home Page
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

//USERS - Get All Blog Posts
router.get('/blog', function (req, res, next) {
  knex('posts').select().then(post => res.json(post))
});

//USERS - Get All Testimonials
router.get('/testimonials', function (req, res, next) {
  knex('testimonials').select().then(testimonial => res.json(testimonial))
});

//ADMIN - Get All Blog Posts
router.get('/admin/blog', function (req, res, next) {
  knex('posts').select().then(post => res.json(post))
});

//ADMIN - Get All Messages
router.get('/admin/messages', function (req, res, next) {
  knex('messages').select().then(message => res.json(message))
});

//Get One Blog Post
router.get('/blog/:id', function (req, res) {
  knex('posts').select().where('id', req.params.id).then(post => res.json(post))
});

//Add One Blog Post
router.post('/admin/blog/new', function (req, res) {
  knex('posts').insert(req.body).then(() => {
    knex('posts').select().then(posts => res.json(posts))
  });
});
//USER - Send a Message
router.post('/contact', function (req, res) {
  knex('messages').insert(req.body).then(() => {
    knex('messages').select().then(message => res.json(message))
  });
});

//Edit One Blog Post
router.patch('/admin/blog/edit/:id', function (req, res) {
  knex('posts').update(req.body).where('id', req.params.id).then(function () {
    knex('posts').select().then(posts => res.json(posts))
  });
});

//Delete One Blog Post
router.delete('/delete/blog/:id', function (req, res) {
  knex('posts').del().where('id', req.params.id).then(function () {
    knex('posts').select().then(posts => res.json(posts))
  });
});


module.exports = router;
