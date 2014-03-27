<?php

function shoestrap_notice( $params, $content = null ) {
	global $ss_framework;

	extract( shortcode_atts( array(
		'type' => 'unknown'
	), $params ) );

	$content = preg_replace( '/<br class="nc".\/>/', '', $content );

	$result  = $ss_framework->alert( $type, do_shortcode( $content ), null, null, true );

	return force_balance_tags( $result );
}
add_shortcode( 'shoestrap_notification', 'shoestrap_notice' );