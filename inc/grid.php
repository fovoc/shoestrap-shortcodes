<?php 

function shoestrap_row( $params, $content = null ) {
	global $ss_framework;

	extract( shortcode_atts( array(), $params ) );

	$content = preg_replace('/<br class="nc".\/>/', '', $content);

	$result  = $ss_framework->open_row( 'div' ) . do_shortcode( $content ) . $ss_framework->close_row( 'div' );

	return force_balance_tags( $result );

}
add_shortcode( 'shoestrap_row', 'shoestrap_row' );

function shoestrap_span( $params, $content = null ) {
	global $ss_framework;

	extract( shortcode_atts( array(
		'columns' => '1'
	), $params ) );

	$result  = $ss_framework->open_col( 'div', array( 'tablet' => $columns ) );
	$result .= do_shortcode( $content );
	$result .= $ss_framework->close_col( 'div' );

	return force_balance_tags( $result );
}
add_shortcode( 'shoestrap_col', 'shoestrap_span' );