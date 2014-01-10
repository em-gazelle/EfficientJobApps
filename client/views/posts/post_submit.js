Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();


    var post = {
      title: $(e.target).find('[name=title]').val(),
      company: $(e.target).find('[name=company]').val(),
      location: $(e.target).find('[name=location]').val(),
      description: $(e.target).find('[name=description]').val(),
      requirements: $(e.target).find('[name=requirements]').val()
    }

    post._id = Posts.insert(post);
    Router.go('postPage', post);

    Meteor.call('post', post, function(error, id) {
      if (error) {
        //display error to user:
        throwError(error.reason);
      }
      
      if (error.error===302) {
      Router.go('postPage', {_id: error.details});
    } 
    else { 
      Router.go('postPage', {_id: id});
    }

    });
  }
});