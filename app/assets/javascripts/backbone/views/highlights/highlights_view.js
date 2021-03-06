AppFinder.Views.Highlights = AppFinder.Views.Highlights || {};

AppFinder.Views.Highlights.HighlightsView = Backbone.View.extend({
  template: JST["backbone/templates/highlights/highlights"],
  initialize: function(){
	  this.model.on('change',this.render,this);
  },
  events: {
  	"click #highlight-btn" : "showHighlight",

  },
  tagName : "div",
  className : "container",
  enter : function() {
  	
	$('#highlight-btn').addClass('over');
  	console.log( "enter" + $('#highlight-btn').hasClass('over'));
  	$('#highlight-box').stop().slideDown('fast');
  },
  showHighlight: function (){
	$('#highlight-btn').toggleClass('over');
  	$('#highlight-box').slideToggle('fast');
  },
  leave : function() {
  	$('#highlight-btn').removeClass('over');
  	setTimeout( function() {
  		if(!$('#highlight-btn').hasClass('over')) {
  			console.log( "leave" + $('#highlight-btn').hasClass('over'));
	  		$('#highlight-box').stop().slideUp('fast');
			$('#highlight-btn').removeClass('over');
		}
  	}, 400);
  	
  },
  render: function(){
  	$(this.el).html(this.template(this.model.toJSON()));
  	return this;
  }
});