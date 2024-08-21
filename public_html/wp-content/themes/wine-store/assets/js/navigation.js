/**
 * Theme functions file.
 *
 * Contains handlers for navigation.
 */

jQuery(function($){
 	"use strict";
   	jQuery('.main-menu-navigation > ul').superfish({
		delay:       500,
		animation:   {opacity:'show',height:'show'},
		speed:       'fast'
   	});

   	$( window ).scroll( function() {
		if ( $( this ).scrollTop() > 200 ) {
			$( '.back-to-top' ).addClass( 'show-back-to-top' );
		} else {
			$( '.back-to-top' ).removeClass( 'show-back-to-top' );
		}
	});

	// Click event to scroll to top.
	$( '.back-to-top' ).click( function() {
		$( 'html, body' ).animate( { scrollTop : 0 }, 500 );
		return false;
	});

});



function luzuk_wine_store_open() {
	jQuery(".sidenav").addClass('show');
}
function luzuk_wine_store_close() {
	jQuery(".sidenav").removeClass('show');
    jQuery( '.mobile-menu' ).focus();
}

function luzuk_wine_store_menuAccessibility() {
	var links, i, len,
	    luzuk_wine_store_menu = document.querySelector( '.nav-menu' ),
	    luzuk_wine_store_iconToggle = document.querySelector( '.nav-menu ul li:first-child a' );
    
	let luzuk_wine_store_focusableElements = 'button, a, input';
	let luzuk_wine_store_firstFocusableElement = luzuk_wine_store_iconToggle; // get first element to be focused inside menu
	let luzuk_wine_store_focusableContent = luzuk_wine_store_menu.querySelectorAll(luzuk_wine_store_focusableElements);
	let luzuk_wine_store_lastFocusableElement = luzuk_wine_store_focusableContent[luzuk_wine_store_focusableContent.length - 1]; // get last element to be focused inside menu

	if ( ! luzuk_wine_store_menu ) {
    	return false;
	}

	links = luzuk_wine_store_menu.getElementsByTagName( 'a' );

	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
	    links[i].addEventListener( 'focus', toggleFocus, true );
	    links[i].addEventListener( 'blur', toggleFocus, true );
	}

	// Sets or removes the .focus class on an element.
	function toggleFocus() {
      	var self = this;

      	// Move up through the ancestors of the current link until we hit .mobile-menu.
      	while (-1 === self.className.indexOf( 'nav-menu' ) ) {
	      	// On li elements toggle the class .focus.
	      	if ( 'li' === self.tagName.toLowerCase() ) {
	          	if ( -1 !== self.className.indexOf( 'focus' ) ) {
	          		self.className = self.className.replace( ' focus', '' );
	          	} else {
	          		self.className += ' focus';
	          	}
	      	}
	      	self = self.parentElement;
      	}
	}
    
	// Trap focus inside modal to make it ADA compliant
	document.addEventListener('keydown', function (e) {
	    let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

	    if ( ! isTabPressed ) {
	    	return;
	    }

	    if ( e.shiftKey ) { // if shift key pressed for shift + tab combination
	      	if (document.activeElement === luzuk_wine_store_firstFocusableElement) {
		        luzuk_wine_store_lastFocusableElement.focus(); // add focus for the last focusable element
		        e.preventDefault();
	      	}
	    } else { // if tab key is pressed
	    	if (document.activeElement === luzuk_wine_store_lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
		      	luzuk_wine_store_firstFocusableElement.focus(); // add focus for the first focusable element
		      	e.preventDefault();
	    	}
	    }
	});   
}

jQuery(function($){
	$('.mobile-menu').click(function () {
	    luzuk_wine_store_menuAccessibility();
  	});
});

// ********

(function( $ ) {
	// NAVIGATION CALLBACK FOR WOCOMMERCE MENU
	var ww = jQuery(window).width();


	/**** Hidden search box ***/
	jQuery('document').ready(function($){
		$('.search-box span i').click(function(){
	        $(".serach_outer").slideDown(700);
	    });

	    $('.closepop i').click(function(){
	        $(".serach_outer").slideUp(700); 
	    });
	});

	$(document).ready(function(){
		$(".product-cat").hide();
	    $(".product-btn").click(function(){
	        $(".product-cat").toggle();
	    });
	});	
	
})( jQuery );



document.addEventListener('DOMContentLoaded', function () {
    // Select all menu items within the primary menu
    const menuItems = document.querySelectorAll('.primary-menu-class > li');

    // Specify the indices of the menu items to show (3rd and 4th items, zero-based indices 2 and 3)
    const indicesToShow = [3, 4, 5]; // 3rd and 4th items (zero-based indices)

    menuItems.forEach((menuItem, index) => {
        if (indicesToShow.includes(index)) {
            menuItem.style.display = 'block'; // Show the 3rd and 4th items
            const subMenu = menuItem.querySelector('.sub-menu');
            
            
        } else {
            menuItem.style.display = 'none'; // Hide all other items
        }
    });

    // Add keyboard accessibility handling for dropdowns
    menuItems.forEach((menuItem) => {
        const subMenu = menuItem.querySelector('.sub-menu');
        const dropdownIcon = menuItem.querySelector('.dropdown-icon');

        if (dropdownIcon) {
            menuItem.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const isExpanded = dropdownIcon.getAttribute('aria-expanded') === 'true';
                    dropdownIcon.setAttribute('aria-expanded', !isExpanded);
                    subMenu.style.opacity = isExpanded ? '0' : '1';
                    subMenu.setAttribute('aria-hidden', isExpanded);
                }

                if (e.key === 'ArrowDown' && subMenu) {
                    e.preventDefault();
                    const firstSubMenuItem = subMenu.querySelector('li > a');
                    firstSubMenuItem.focus();
                }

                if (e.key === 'ArrowUp' && subMenu) {
                    e.preventDefault();
                    const lastSubMenuItem = subMenu.querySelector('li:last-child > a');
                    lastSubMenuItem.focus();
                }

                if (e.key === 'Escape' && subMenu) {
                    e.preventDefault();
                    dropdownIcon.setAttribute('aria-expanded', 'false');
                    subMenu.style.opacity = '0';
                    subMenu.setAttribute('aria-hidden', 'true');
                    menuItem.querySelector('a').focus();
                }
            });
        }
    });
});


