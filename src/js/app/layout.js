var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var AppBaseView = React.createClass({
	render: function(){
		return(
			<div className="base-container">
				<RouteHandler />
			</div>
		);
	}
});

module.exports = AppBaseView;