<?php 

function shoestrap_buttons( $params, $content = null ) {
	global $ss_framework;

	extract( shortcode_atts( array(
		'size'  => 'default',
		'type'  => 'default',
		'value' => 'button',
		'href'  => '#',
	), $params ) );

	$content = preg_replace( '/<br class="nc".\/>/', '', $content );

	$result = '<a class="' . $ss_framework->button_classes( $type, $size ) . '" href="' . $href . '">' . do_shortcode( $content ) . '</a>';

	return force_balance_tags( $result );
}
add_shortcode( 'shoestrap_button', 'shoestrap_buttons' );