
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: 'title1', blog_content: 'content1', image: 'http://via.placeholder.com/250x250' },
        {title: 'title2', blog_content: 'content2', image: 'http://via.placeholder.com/250x250' },
        {title: 'title3', blog_content: 'content3', image: 'http://via.placeholder.com/250x250' }
      ]);
    });
};
