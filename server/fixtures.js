// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Anna Salazar' }
  });
  var tom = Meteor.users.findOne(tomId);

  var sachaId = Meteor.users.insert({
    profile: { name: 'EndoGurl Warrior' }
  });
  var sacha = Meteor.users.findOne(sachaId);

  var toomanyId = Meteor.users.insert({
    profile: { name: 'Average woman for 10 years'}
  });
  var toomany = Meteor.users.findOne(toomanyId);

  var motivationId = Meteor.users.insert({
    profile: { name: 'Motivation'}
  });
  var motivation = Meteor.users.findOne(motivationId);

//insert posts

  var SanchezId = Posts.insert({
    userId: sacha._id,
    author: sacha.profile.name,
    title: 'Web Developer',
    company: 'United Health',
    location: 'San Mateo, CA',
    description: 'We are looking for a full stack developer who will build our new, updated health care website.',
    requirements: 'Are you a full stack dev skilled in Node with enough experience to build our site with minimal supervision? Come join us!',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 0,
    totalrating: 7.5,
    totalrating_possible: 10
  });


var NezhatId = Posts.insert({
    userId: tom._id,
    author: tom.profile.name,
    title: 'Marketing Assistant',
    company: 'The Great Wall of Gamers',
    location: 'Oakland, CA',
    description: 'You will market our games to elementary school aged kids and promote our awesome new product that no one has ever heard of!',
    requirements: 'You are a rockstar and want to game with us during lunch. You have 3+ years of experience and are excited for challenges.',
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0,
    totalrating: 5,
    totalrating_possible: 5
  });
}

/*

Comments.insert({
  postId: NezhatId,
  userId: sacha._id,
  author: sacha.profile.name,
  submitted: now - 2 * 1200 * 100,
  empathy: 'How beautiful it was to finally meet an understanding, compassionate doctor! He listened to everything I said and did not question my judgment, only provided guidance',
  expectations: 'I expected Dr. Nezhat to permanently diminish my symptoms via laparascopic excisioin surgery. So far, it is working!',
  specificKnowledge: 'Dr. Nezhat was extraordinarily knowledgeable; what a relief! His surgical expertise is also, of course, unparalleled.',
  ratedas: 5
});
*/