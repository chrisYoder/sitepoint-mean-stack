const mongoose = require('mongoose');

const BucketlistSchema = mongoose.schema({
	title: {
		type: String,
		required: true
	}, 
	
	description: String, 
	category: {
		type: String,
		required: true, 
		enum: ['High', "Medium", 'Low']
	}
}); 


// convert schema to model and export it
const BucketList = module.exports = mongoose.model('BucketList', BucketlistSchema);

// Database queries

// BucketList.find() returns all lists
module.exports.getAllLists = callback => {
	BucketList.find(callback);
}

// newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
	newList.save(callback);
}

// deletes list after being passed an id parameter
module.exports.deleteListById = (id, callback) => {
	let query = {_id: id};
	BucketList.remove(query, callback);
}