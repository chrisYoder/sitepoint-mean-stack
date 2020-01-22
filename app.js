// Declares dependencies
const express 	= require('express'),
	  path		= require('path'),
	  bodyParser= require('body-parser'),
	  cors		= require('cors'),
	  mongoose	= require('mongoose'),
	  config 	= require('./config/database'),
	  bucketlist= require('./controllers/bucketlist');

// connect mongoose to database
mongoose.connect(config.database);

// Initialize the app variable
const app = express();

// Declare Port
const port = 3000

// routing all http requests to /bucketlist to bucketlist controller
app.use('/bucketlist', bucketlist);

// Middleware for CORS
app.use(cors());

// Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/* express.static is a built in middleware function to serve static files. We are telling express server public folder is the place to look for the static files */
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.send('Invalid Page');
});

app.listen(port, () => console.log(`Starting the server at port ${port}`))