<?php
/**
 * Custom header implementation
 */

function luzuk_wine_store_custom_header_setup() {
	add_theme_support( 'custom-header', apply_filters( 'luzuk_wine_store_custom_header_args', array(
		'default-text-color' => 'fff',
		'header-text' 	     =>	false,
		'width'              => 1200,
		'height'             => 90,
		'flex-width'         => true,
		'flex-height'        => true,
		'wp-head-callback'   => 'luzuk_wine_store_header_style',
	) ) );
}

add_action( 'after_setup_theme', 'luzuk_wine_store_custom_header_setup' );

if ( ! function_exists( 'luzuk_wine_store_header_style' ) ) :
/**
 * Styles the header image and text displayed on the blog
 *
 * @see luzuk_wine_store_custom_header_setup().
 */
add_action( 'wp_enqueue_scripts', 'luzuk_wine_store_header_style' );
function luzuk_wine_store_header_style() {
	//Check if user has defined any header image.
	if ( get_header_image() ) :
	$custom_css = "
        .main-header {
			background-image:url('".esc_url(get_header_image())."');
			background-position: bottom center;
			background-size: 100% 100%;
		}";
   	wp_add_inline_style( 'wine-store-basic-style', $custom_css );
	endif;
}
endif; // luzuk_wine_store_header_style