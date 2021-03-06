Posts = new Meteor.Collection('posts');

Posts.allow({
	update: ownsDocument,
	remove: ownsDocument
});

Posts.deny({
	update: function(userId, post, fieldNames) {
		//may only edit the following fields:
		return (_.without(fieldNames, 'title', 'company', 'description', 'location', 'requirements').length > 0);
	}
});

Meteor.methods({
	post: function(postAttributes) {
		var user = Meteor.user(),
			postWithSameLink = Posts.findOne({company: postAttributes.company});
	//ensure the user is logged in
	if (!user)
{		throw new Meteor.Error(401, "Sorry! You need an account to create a job posting.");

}	//post must have a Dr's name
/*



add all fields for errors once app is functioning. Test123XYZ


	if (!postAttributes.doctor)
{		throw new Meteor.Error(422, "Please add the name of the doctor you wish to review.");
}
*/
	//pick out whitelisted keys
	var post = _.extend(_.pick(postAttributes, 'title', 'company', 'location', 'description', 'requirements'), {
		userId: user._id,
		author: user.username,
		submitted: new Date().getTime(),
		commentsCount:0,
		totalrating: 0,
		totalrating_possible: 0
		//rating = 0? rating = rating? Not working :()
		
	});
		

	var postId = Posts.insert(post);

	return postId;
	}

});