// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;

// Reference the high-level components
var Main = require('../components/Main');
var child1 = require('../components/Child1'); 
var child2 = require('../components/Child2'); 

// Export the Routes
module.exports = (

	/*High level component is the Main component*/
	<Route path='/' component={Main}>

		{/* If user selects Info or Chat show the appropriate component*/}
		<Route path='results' component={Child1} />
		<Route path='saved' component={Child2} />

		{/*If user selects any other path... we get the Info Route*/}
		<IndexRoute component={Info} />

	</Route>


);