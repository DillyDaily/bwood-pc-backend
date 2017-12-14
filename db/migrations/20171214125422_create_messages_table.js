exports.up = function(knex, Promise) {
    return knex.schema.createTable('messages', function (table) {
        table.increments();
        table.text('first_name');
        table.text('last_name');
        table.text('message_content');
        table.text('email');
        table.timestamps(true, true);
        });
    };
    
    exports.down = function (knex, Promise) {
        return knex.schema.dropTable('messages');
    };