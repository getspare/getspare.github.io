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
