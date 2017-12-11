
exports.up = function(knex, Promise) {
return knex.schema.createTable('posts', function (table) {
    table.increments();
    table.string('title');
    table.text('blog_content');
    table.string('image');
    table.timestamps(true, true);
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('posts');
};