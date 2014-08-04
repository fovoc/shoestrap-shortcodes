<?php
/*
Plugin Name: Shoestrap Shortcodes
Plugin URI: http://shoestrap.org
Description: A simple shortcode generator. Adds buttons, columns and alerts to your Shoestrap theme.
Version: 1.2
Author: @aristath, @fovoc
Author URI: http://wpmu.io

*/

define( 'SHOESTRAP_SHORTCODES_FILE', __FILE__ );

// Require the shortcode files.
require_once( 'inc/grid.php' );
require_once( 'inc/alert.php' );
require_once( 'inc/buttons.php' );
require_once( 'inc/updater/updater.php' );


class Shoestrap_Shortcodes {

	// The array of available shortcodes
	public $shortcodes = array(
		'grid',
		'alerts',
		'buttons',
	);

	/**
	 * Class constructor
	 */
	public function __construct() {

		add_action( 'init', array( $this, 'init' ) );

	}

	/**
	 * Initialize the plugin & add assets
	 */
	function init() {

		if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) ) {

			return;

		}

		if ( ! is_admin() ) {

			wp_enqueue_script( 'shoestrap_shortcodes_init', plugins_url( 'js/init.js', __FILE__ ), array( 'jquery' ) );

		} else {

			wp_enqueue_style( 'shoestrap_shortcodes_admin_style', plugins_url( 'css/admin.css', __FILE__ ) );

		}

		if ( get_user_option( 'rich_editing' ) == 'true' ) {

			add_filter( 'mce_external_plugins', array( $this, 'regplugins' ) );
			add_filter( 'mce_buttons_3', array( $this, 'regbtns' ) );

		}
	}

	/**
	 * Add the buttons
	 */
	function regbtns( $buttons ) {

		foreach ( $this->shortcodes as $shortcode ) {
			array_push( $buttons, 'shoestrap_' . $shortcode );
		}

		return $buttons;
	}

	/**
	 * Add plugins
	 */
	function regplugins( $plgs ) {

		foreach ( $this->shortcodes as $shortcode ) {
			$plgs['shoestrap_' . $shortcode] = plugins_url( 'js/plugins/' . $shortcode . '.js', __FILE__ );
		}

		return $plgs;
	}

}

$ss_shortcodes = new Shoestrap_Shortcodes();
