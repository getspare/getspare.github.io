/*
	Transit by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel.init({
		reset: 'full',
		breakpoints: {
			xlarge: {
				media: '(max-width: 1680px)',
			},
			large: {
				media: '(max-width: 1280px)',
			},
			medium: {
				media: '(max-width: 980px)',
			},
			small: {
				media: '(max-width: 736px)',
			},
			xsmall: {
				media: '(max-width: 480px)',
			}
		},
		plugins: {
			layers: {
				config: {
					mode: 'transform'
				},
				navButton: {
					breakpoints: 'medium',
					height: '4em',
					html: '<span class="toggle" data-action="toggleLayer" data-args="navPanel"></span>',
					position: 'top-left',
					side: 'top',
					width: '6em'
				},
				navPanel: {
					animation: 'overlayX',
					breakpoints: 'medium',
					clickToHide: true,
					height: '100%',
					hidden: true,
					html: '<div data-action="moveElement" data-args="nav"></div>',
					orientation: 'vertical',
					position: 'top-left',
					side: 'left',
					width: 250
				}
			}
		}
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

	});

})(jQuery);

$( document ).ready(function() {

		/* Basic Gallery */
		$( '.swipebox' ).swipebox();

		/* Video */
		$( '.swipebox-video' ).swipebox();

		/* Dynamic Gallery */
		$( '#gallery' ).click( function( e ) {
			e.preventDefault();
			$.swipebox( [
				{ href : 'http://swipebox.csag.co/mages/image-1.jpg', title : 'My Caption' },
				{ href : 'http://swipebox.csag.co/images/image-2.jpg', title : 'My Second Caption' }
			] );
		} );

	$('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');
		$svg = $svg.removeAttr('height');
		$svg = $svg.attr('height', "100%");
		$svg = $svg.removeAttr('width');
		$svg = $svg.attr('width', "100%");

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});
});

