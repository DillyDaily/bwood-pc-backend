
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('testimonials').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: 'Best Shape of My Life', testimonial_content: "When I made my mind up that I wanted to get into the best shape of my life, I started an interview process with several trainers that were referred to me by my clientele. (I work closely with a lot of professional athletes.)When I met with Billy, I asked him why he considers himself an expert. Without hesitation he began to respond.I hired him instantly. And am I ever glad I did.Here are some of the distinguishing variables that have me so comfortably recommend that you hire Billy if you're truly serious about getting results", image: "https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-8/25300038_10107030420393072_8133755231692706337_o.jpg?oh=7beda50abfa53b3d98f0b0767d046cee&oe=5ACEF7B9" },
        {title: 'Level Up', testimonial_content: "This is why you should choose rise for your developmental athletic needs. Our goal was to get inside 270 lbs (required by Boise State) w/out carrying too much extra fat that would mess with movement patterns (power output). These results reflect 12 weeks of strength and ROM training and 7 weeks of speed and explosion training. If you are ready to take your game to the next level send Billy a message!!" , image: 'https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-8/25188824_10107030371870312_5869582275209004413_o.jpg?oh=4a9fbaef6f5f6023b4fe293c08c79252&oe=5AD4128B' },
        {title: 'Beyond Happy With My Results', testimonial_content: "I can't thank Billy enough for the training, motivation, mentoring, knowledge and meals he has givin me.  after several months of relentless training and constant re commiting to my goal of getting in great shape, I made it, and I love my results!!", image: 'https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-8/25182262_10107030321885482_5152799633050746183_o.jpg?oh=5af12d7cca25aa395851522b77e87e51&oe=5AC52C7A' },
        {title: 'Life Changing!', testimonial_content: "Literally cannot believe how much my body and health has changed in just 4 weeks!!  This is only the begining and so excited for what is to come.  Billy is the best trainer ever! He is changing my life!  Arizona If you are in need of a trainer or lifestyle change he is your guy, he is changing my life!!!", image: 'https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-8/25182335_10107030420383092_2162260078286890512_o.jpg?oh=3e90792c38eae7d753ff4b510e4e0205&oe=5AC35CB6' },
      ]);
    });
};
