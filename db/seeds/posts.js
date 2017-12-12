
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: 'title1', blog_content: 'content1', image: 'https://static.wixstatic.com/media/24b9c0_cc90ec989d5647cab85d7dab42161386.jpg/v1/fill/w_718,h_544,al_c,q_85,usm_0.66_1.00_0.01/24b9c0_cc90ec989d5647cab85d7dab42161386.webp' },
        {title: 'title2', blog_content: 'content2', image: 'https://static.wixstatic.com/media/24b9c0_f8de7c623871452babf17e713ae83cc3.jpg/v1/fill/w_490,h_464,al_c,q_80,usm_0.66_1.00_0.01/24b9c0_f8de7c623871452babf17e713ae83cc3.webp' },
        {title: 'title3', blog_content: 'content3', image: 'https://static.wixstatic.com/media/24b9c0_3c01a394d7a744e4baefa68d51248b5e.jpg/v1/fill/w_512,h_526,al_c,q_80,usm_0.66_1.00_0.01/24b9c0_3c01a394d7a744e4baefa68d51248b5e.webp' }
      ]);
    });
};
