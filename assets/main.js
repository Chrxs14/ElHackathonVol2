jQuery(document).ready(function($) {
	'use strict';

	$('.demo-filter a').on('click', function(e) {
		e.preventDefault();
		var filter = $(this).attr('href').replace('#', '');
		$('.demos').isotope({ filter: '.' + filter });
		$(this).addClass('active').siblings().removeClass('active');
	});

	$('.molla-lz').lazyload({
		effect: 'fadeIn',
		effect_speed: 400,
		appearEffect: '',
		appear: function(elements_left, settings) {
			
		},
		load: function(elements_left, settings) {
			$(this).removeClass('molla-lz').css('padding-top', '');
		}
	});

	// Mobile Menu Toggle - Show & Hide
	$('.mobile-menu-toggler').on('click', function (e) {
		$('body').toggleClass('mmenu-active');
		$(this).toggleClass('active');
		e.preventDefault();
	});

	$('.mobile-menu-overlay, .mobile-menu-close').on('click', function (e) {
		$('body').removeClass('mmenu-active');
		$('.menu-toggler').removeClass('active');
		e.preventDefault();
	});

	$('.goto-demos').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: $('.row.demos').offset().top}, 600);
	});

	$('.goto-features').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: $('.section-features').offset().top}, 800);
	});

	$('.goto-elements').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: $('.section-elements').offset().top}, 1000);
	});

	$('.goto-support').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: $('.section-support').offset().top}, 1200);
	});
});

jQuery(window).on('load', function() {
	jQuery('.demos').isotope({
		filter: '.homepages',
		initLayout: true,
		itemSelector: '.iso-item',
		layoutMode: 'masonry'
	}).on('layoutComplete', function(e) {
		jQuery(window).trigger('scroll');
	});
});

// Obtén el botón de la cámara por su ID
var botonCamara = document.getElementById('botonCamara');

// Agrega un event listener para el clic en el botón
botonCamara.addEventListener('click', function() {
    // Verificar si el navegador admite la API de captura de medios
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Solicitar acceso a la cámara con la opción de video
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                // El usuario ha permitido el acceso a la cámara, puedes redirigir a la aplicación de la cámara
                window.location.href = 'tu-esquema-de-URL-para-la-aplicacion-de-la-camara'; // Reemplaza esto con el esquema de URL correcto para la aplicación de la cámara en tu dispositivo
            })
            .catch(function(error) {
                console.error('Error al acceder a la cámara: ', error);
            });
    } else {
        console.error('Tu navegador no admite la API de captura de medios');
    }
});

