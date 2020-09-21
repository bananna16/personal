$(function() {
	
	$('.input-group').find('.form-control').focus(function(){
		$(this).closest('.input-group').addClass("input-group-focus");
	}).blur(function() {
		$(this).closest('.input-group').removeClass("input-group-focus");
	});

	var slider = document.getElementById('slider');

	noUiSlider.create(slider, {
	    start: [20, 80],
	    connect: true,
	    range: {
	        'min': 0,
	        'max': 100
	    }
	});

	var slider2 = document.getElementById('slider-2');

	noUiSlider.create(slider2, {
	    start: [30],
	    connect: [true, false],
	    range: {
	        'min': 0,
	        'max': 100
	    }
	});


	$('.dropdown > a, .dropdown > button').click(function() {

		let $this = $(this);

		if ( $this.closest('.dropdown').find('.dropdown-menu').hasClass('active') ) {
			$this.closest('.dropdown').find('.dropdown-menu').removeClass('active');
		}

		setTimeout(function() {
			$this.closest('.dropdown').find('.dropdown-menu').addClass('active')
		}, 200);

	});


	$('#datetimepicker1').datetimepicker();

	$('[data-toggle="popover"]').popover();

  $('[data-toggle="tooltip"]').tooltip()



var element_position = $('#about').offset().top;
var navbars = $('.nav-link');

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position;

    if(y_scroll_pos > scroll_pos_test) {
		console.log("passed")
        $('.nav-link').css("color", "#6E7FF3");
    }
});


});
