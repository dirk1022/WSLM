// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

var uuid = require('node-uuid');
var Well = require('./models/well');
var WocWell = require('./models/wocwell');
var ActivityType = require('./models/activitytype');
var ActivityComponent = require('./models/activitycomponent');
var Employee = require('./models/employee');
var WellDailyActivity = require('./models/welldailyactivity');
var WellDowntimeHistory = require('./models/welldowntimehistory');

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET
// http://localhost:8080/api)
router.get('/service', function(req, res) {
	res.json({
		message : 'Hey man! Welcome to WSLM service!'
	});
});




router.route('/service/activity_component_create').post(function(req, res) {
	var activityComponent = new ActivityComponent();
	activityComponent.component_id = req.body.component_id;
	activityComponent.activity_type_id = req.body.activity_type_id;

	activityComponent.save(function(err) {
		if (err)
			res.send(err);
		res.json({
			message : 'Activity Type Created!'
		});
	});
});
router.route('/service/activity_component_query_by_obj_id')
// create a bear (accessed at POST http://localhost:8080/api/bears)
.post(function(req, res) {
	var wherestr = {
		'_id' : req.body.object_id
	};
	ActivityComponent.find(wherestr, function(err, data) {
		if (err) {
			res.send(err);
		}
		res.json(data);
	});
});

router.route('/service/well_daily_activity_create')
.post(function(req, res) {
	var wellDailyActivity = new WellDailyActivity();
	wellDailyActivity.well_id = req.body.well_id;
	wellDailyActivity.activity_id = req.body.activity_id;
	wellDailyActivity.component_id = req.body.component_id;
	wellDailyActivity.activity_type_id = req.body.activity_type_id;
	wellDailyActivity.planned_start_date_time = req.body.planned_start_date_time;
	wellDailyActivity.planned_end_date_time = req.body.planned_end_date_time;
	wellDailyActivity.actual_start_date_time = req.body.actual_start_date_time;
	wellDailyActivity.actual_end_date_time = req.body.actual_end_date_time;
	wellDailyActivity.po_id = req.body.po_id;
	wellDailyActivity.status = req.body.status;
	wellDailyActivity.planned_quantity = req.body.planned_quantity;
	wellDailyActivity.duration_of_crew = req.body.duration_of_crew;
	wellDailyActivity.task_of_crew = req.body.task_of_crew;

	wellDailyActivity.save(function(err) {
		if (err)
			res.send(err);
		res.json({
			message : 'WellDailyActivity created!'
		});
	});
});

router.route('/service/well_daily_activity_query_by_ids')
.post(function(req, res) {
	var wherestr = {
		'well_id' : req.body.well_id,
		'activity_id' : req.body.activity_id,
		'component_id' : req.body.component_id
	};
	WellDailyActivity.find(wherestr, function(err, data) {
		if (err) {
			res.send(err);
		}
		res.json(data);
	});
});
router.route('/service/well_daily_activity_query_all')
.post(function(req, res) {

	WellDailyActivity.find( function(err, data) {
		if (err) {
			res.send(err);
		}
		res.json(data);
	});
});

// more routes for our API will happen here
// more routes for our API will happen here
// more routes for our API will happen here
// more routes for our API will happen here
// more routes for our API will happen here
// more routes for our API will happen here
// more routes for our API will happen here
// more routes for our API will happen here
// more routes for our API will happen here

router.route('/service/employee_create').post(function(req, res) {
	var employee = new Employee();
	employee.emp_id = req.body.emp_id;
	employee.first_name = req.body.first_name;
	employee.last_name = req.body.last_name;

	employee.save(function(err) {
		if (err)
			res.send(err);
		res.json({
			message : 'Employee Created!'
		});
	});
});

router.route('/service/employee_query_all')
.get(function(req, res) {
	Employee.find(function(err, employees) {
		if (err) {
			res.send(err);
		}
		res.json(employees);
	});
});

router.route('/service/employee_query_by_id')
.post(function(req, res) {
	var wherestr = {
		'emp_id' : req.body.emp_id
	};
	Employee.find(wherestr, function(err, employees) {
		if (err) {
			res.send(err);
		}
		res.json(employees);
	});
});
/////////////////////////////////////////////////////////////////////
router.route('/service/well_query_by_id')
.post(function(req, res) {
	var wherestr = {
		'well_id' : req.body.well_id
	};
	Well.find(wherestr, function(err, data) {
		if (err) {
			res.send(err);
		}
		res.json(data);
	});
});
router.route('/service/well_query_all')
.post(function(req, res) {

	Well.find(function(err, data) {
		if (err) {
			res.send(err);
		}
		res.json(data);
	});
});

router.route('/service/well_create')
.post(function(req, res) {
	var well = new Well(); 
	well.well_id = uuid.v1();
	well.name = req.body.name;
	well.latitude = req.body.latitude;
	well.longtitude = req.body.longtitude;
	well.geofence_radius_in_meters = req.body.geofence_radius_in_meters;
	well.total_depth = req.body.total_depth;
	well.api_num = req.body.api_num;
	well.monthly_product_num = req.body.monthly_product_num;// set the bears

	well.save(function(err) {
		if (err)
			res.send(err);
		res.json({
			message : 'Well created!'
		});
	});
});


// WOC_WELL
router.route('/service/woc_well_create').post(function(req, res) {
	var wocWell = new WocWell();
	wocWell.emp_id = req.body.emp_id;
	wocWell.well_id = req.body.well_id;
	wocWell.wocWell_id = uuid.v1();

	wocWell.save(function(err) {
		if (err)
			res.send(err);
		res.json({
			message : 'WocWell Created!'
		});
	});
});
router.route('/service/woc_well_query_all')
// create a bear (accessed at POST http://localhost:8080/api/bears)
.get(function(req, res) {

	WocWell.find(function(err, employees) {
		if (err) {
			res.send(err);
		}
		res.json(employees);
	});
});

// router.route('/service/woc_well_query_by_id').post(function(req, res) {
// WocWell.findOne({ }).populate('_emp').exec(function(err,wocWells) {
// if (err){
// res.send(err);
// }
// res.json(wocWells);
// });
// });
router.route('/service/woc_well_query_by_well_id').post(function(req, res) {
	var wherestr = {
		'well_id' : req.body.well_id
	};

	WocWell.find(wherestr, function(err, wocWells) {
		if (err) {
			res.send(err);
		}
		res.json(wocWells);
	});
});

router.route('/service/well_downtime_history_create')
// create a bear (accessed at POST http://localhost:8080/api/bears)
.post(function(req, res) {
	var wellDowntimeHistory = new WellDowntimeHistory();
	wellDowntimeHistory.well_id = req.body.well_id;
	wellDowntimeHistory.down_time = req.body.down_time;

	wellDowntimeHistory.save(function(err) {
		if (err)
			res.send(err);
		res.json({
			message : 'WellDowntimeHistory created!'
		});
	});
});
router.route('/service/well_downtime_history_query_by_id')
// create a bear (accessed at POST http://localhost:8080/api/bears)
.post(function(req, res) {
	var wherestr = {
		'well_id' : req.body.well_id,
	};
	WellDowntimeHistory.find(wherestr, function(err, data) {
		if (err) {
			res.send(err);
		}
		res.json(data);
	});
});

router.route('/service/well_downtime_history_query_all')
.post(function(req, res) {

	WellDowntimeHistory.find(function(err, data) {
		if (err) {
			res.send(err);
		}
		res.json(data);
	});
});

router.route('/service/activity_type_create').post(function(req, res) {
	var activityType = new ActivityType();
	activityType.activity_id = req.body.activity_id;
	activityType.activity_name = req.body.activity_name;
	activityType.activity_description = req.body.activity_description;

	activityType.save(function(err) {
		if (err)
			res.send(err);
		res.json({
			message : 'Activity Type Created!'
		});
	});
});
router.route('/service/activity_type_query_by_id')
.post(function(req, res) {
	var wherestr = {
		'activity_id' : req.body.activity_id
	};
	ActivityType.find(wherestr, function(err, data) {
		if (err) {
			res.send(err);
		}
		res.json(data);
	});
});
router.route('/service/activity_type_query_all')
.post(function(req, res) {
	ActivityType.find(function(err, data) {
		if (err) {
			res.send(err);
		}
		res.json(data);
	});
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/wslm', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);