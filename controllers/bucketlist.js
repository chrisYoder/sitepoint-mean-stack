// require express and express router
const express 	= require('express'),
	  router	= express.Router();

//  GET HTTP method to /bucket
router.get('/', (req, res) => {
	bucketlist.getAllLists( (err, lists) => {
		if(err) {
			res.json({
				success: false, 
				message: `Failed to load all lists. Error: ${err}`
			});
		}
		
		else { 
			res.write(JSON.stringify({
				success: true, 
				lists:lists, 
			}, null, 2));
			
			res.end();
		}
	});
});

// POST HTTP method to /bucketlist
router.post('/', (req, res, next) => {
	let newList = new bucketlist({
		title: req.body.title, 
		description: req.body.description, 
		category: req.body.category
	});
	
	bucketlist.addList(newList, (err, list) => {
		if(err) {
			res.json({
				success: false, 
				message: `Failed to create new list. Error: ${err}`
			});
		}
		
		else {
			res.json({
				success: true,
				message: "Added successfully"
			});
		}
	});
});

router.delete(':/id', (req, res, next) => {
	// access the parameter which is the id fo the item to be deleted
	let id = req.params.id;
	
	// call delete model method
	bucketlist.deleteListById(id, (err, list) => {
		if(err) {
			res.json({
				success: false,
				message: `Failed to delete the list. Error: ${err}`
			});
		}
		
		else if(list) {
			res.json({
				success: true,
				message: "Deleted successfully";
			})
		}
		
		else {
			res.json({success: false});
		}
	})
	
});

module.exports = router;