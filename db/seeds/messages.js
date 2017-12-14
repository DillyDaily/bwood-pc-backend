
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').del()
    .then(function () {
      // Inserts seed entries
      return knex('messages').insert([
        {first_name: "Alexis", last_name: 'Finney', message_content: "My goal is to maintain my level of 4-year-old energy forever.", email: "babe1@myniece"},
        {first_name: "Lukey", last_name: 'Finney', message_content: "I want to get swole. Can I bring my Tia so she can get fit too?", email: "babe2@mynephew"},
        {first_name: "Haze", last_name: 'Finney', message_content: "I am one month old and am interested in setting up a nutrition plan. What is your recommendation?", email: "babe3@myniece"}
      ]);
    });
};
