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




});

document.querySelector("#start").innerHTML = `<a class="navbar-brand" href="index.html">Engineering World Health at UCSD
<!-- If I want to insert logo: <img src="images/national-ewh-logo.png" class="d-inline w-50" alt="Official EWH logo"> -->
</a>

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown1"
aria-controls="navbarNavDropdown1" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarNavDropdown1">
<ul class="navbar-nav ml-auto">
	<li class="nav-item">
		<a class="nav-link d-flex align-items-center" href="team.html"><span>Officer Board</span></a>
	</li>
	<li class="nav-item dropdown">
		<a class="nav-link dropdown-toggle" href="projects.html" id="navbarDropdownMenuLink" role="button"
			data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			Projects 2019-2020
		</a>
		<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			<a class="dropdown-item" href="projects.html#water">Portable Water Sterilization</a>
			<a class="dropdown-item" href="projects.html#vaccine">Cold Chain System for Vaccine Storage</a>
			<a class="dropdown-item" href="projects.html#warmer">Portable Infant Warmer</a>
			<a class="dropdown-item" href="projects.html#insoles">Gait Analysis Insoles</a>
			<a class="dropdown-item" href="projects.html#parasite">Microscopy Software for Parasitic
				Infection Diagnosis</a>
		</div>
	</li>
	<li class="nav-item">
		<a class="nav-link d-flex align-items-center" href="calendar.html"><span>Calendar</span></a>
	</li>
	<li class="nav-item dropdown">
		<a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
			data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			Contact Us
		</a>
		<div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			<a class="dropdown-item" href="mailto:ewh@ucsd.edu" target="_blank">ewh@ucsd.edu</a>
			<a class="dropdown-item" href="https://www.facebook.com/groups/ewh.ucsd/about/"
				target="_blank">Facebook</a>
			<a class="dropdown-item" href="https://www.instagram.com/ewh_ucsd/"
				target="_blank">Instagram</a>
		</div>
	</li>
	<li class="nav-item">
		<a class="nav-link d-flex align-items-center" href="http://eepurl.com/bDg4sz"
			target="_blank"><span>Mailing List</span></a>
	</li>
</ul>

<form action=""></form>

</div>`
