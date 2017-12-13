
exports.up = function(knex, Promise) {
    return knex.schema.createTable('testimonials', function (table) {
        table.increments();
        table.string('title');
        table.text('testimonial_content');
        table.string('image');
        table.timestamps(true, true);
        });
    };
    
    exports.down = function (knex, Promise) {
        return knex.schema.dropTable('testimonials');
    };