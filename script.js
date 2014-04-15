var rotation_offset = 7.5;
var min_rotation = 1080; // must be a multiple of 360
var values = [1000,600,300,700,450,100,800,"Lose a Turn",250,400,500,"Bankrupt",900,300,250,900,200,400,550,200,500,"Free Spin",600,200];
console.log(values.length+" items");
var deg_per_side = 360/values.length;
$(function() {
	var $wheel = $('#wheel');
	function resetWheel() {
		console.log("reset");
		$wheel.css({
			WebkitTransform: 'none',
			transition: 'none'
		});
	}
	function spinWheel() {
		var deg = Math.random()*360 - rotation_offset;
		console.log(deg);
		var selected_index = Math.round(deg / deg_per_side);
		console.log("Index: "+selected_index);
		var selected_value = values[selected_index];
		console.log("Value: "+selected_value);
		$wheel.css({
			transition: '-webkit-transform 3s',
			WebkitTransform: 'rotate('+(deg+rotation_offset+min_rotation)+'deg)'
		});
	}
	$('button.spin').on('click',function(e) {
		e.preventDefault();
		resetWheel();
		setTimeout(function() {
			spinWheel();	
		},200);
	});
	$('button.reset').on('click',function(e) {
		e.preventDefault();
		resetWheel();
	});
	resetWheel();
});