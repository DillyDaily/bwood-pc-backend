var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

//Get Home Page
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

//Get All Blog Posts
router.get('/blog', function (req, res, next) {
  knex('posts').select().then(post => res.json(post))
});

//Get One Blog Post
router.get('/blog/:id', function (req, res) {
  knex('posts').select().where('id', req.params.id).then(post => res.json(post))
});

//Add One Blog Post
router.post('admin/blog/new', function (req, res) {
  knex('posts').insert(req.body).then(() => {
    knex('posts').select().then(posts => res.json(posts))
  });
});

//Edit One Blog Post
router.patch('admin/blog/:id', function (req, res) {
  knex('posts').update(req.body).where('id', req.params.id).then(function () {
    knex('posts').select().then(posts => res.json(posts))
  });
});

//Delete One Blog Post
router.delete('admin/blog/:id', function (req, res) {
  knex('posts').del().where('id', req.params.id).then(function () {
    knex('posts').select().then(posts => res.json(posts))
  });
});


module.exports = router;