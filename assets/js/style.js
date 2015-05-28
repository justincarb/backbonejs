(function(){
	"usr strict"

	var course = Backbone.Model.extend({
		defaults : {
			titile: '',
			url: ''
		},

		urlRoot: 'courses/'
	});

})