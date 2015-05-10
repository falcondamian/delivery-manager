Meteor.startup(function() {  

  if (Meteor.isClient || !process.env.IS_MIRROR) {
    return;
  }

  Meteor.users.remove({});

  Accounts.createUser({
    username: "fake",
    email: "fake@test.com",
    password: "fake",
    profile: {
      name: "fake"
    }
  });

});
