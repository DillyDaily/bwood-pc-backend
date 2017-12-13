
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: 'title1', blog_content: 'content1', image: '<iframe width="560" height="315" src="https://www.youtube.com/embed/NgY1XrlM2QY?rel=0&amp;controls=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>' },
        {title: 'title2', blog_content: 'content2', image: 'https://www.youtube.com/embed/zwCEVjtt3wI?rel=0' },
        {title: 'title3', blog_content: 'content3', image: 'https://static.wixstatic.com/media/24b9c0_3c01a394d7a744e4baefa68d51248b5e.jpg/v1/fill/w_512,h_526,al_c,q_80,usm_0.66_1.00_0.01/24b9c0_3c01a394d7a744e4baefa68d51248b5e.webp' }
      ]);
    });
};
