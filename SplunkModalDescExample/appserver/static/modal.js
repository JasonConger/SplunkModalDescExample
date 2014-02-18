require(['jquery'], function($){
    $(function() {
		// When the DOM is ready, move the modal button where we want it to be displayed
		$("#chart1 .panel-head").find("h3").after($("#btn1"));
	});
});