<?php
/*
Plugin Name: Shoestrap Shortcodes
Plugin URI: http://shoestrap.org
Description: A simple shortcode generator. Adds buttons, columns and alerts to your Shoestrap theme.
Version: 1.0
Author: @aristath, @fovoc
Author URI: http://shoestrap.org

*/

// Require the shortcode files.
require_once( 'inc/grid.php' );
require_once( 'inc/alert.php' );
require_once( 'inc/buttons.php' );


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

/**
 * The plugin updater
 */
function shoestrap_shortcodes_plugin_updater() {

	$args = array(
		'remote_api_url' => 'http://shoestrap.org',
		'item_name'      => 'Shoestrap Shortcodes',
		'license'        => '84f2efdcfd77445058ada959461aec7d',
		'version'        => '1.0',
		'author'         => 'aristath, fovoc',
		'mode'           => 'plugin',
		'title'          => 'Shoestrap Shortcodes License',
		'field_name'     => 'shoestrap_shortcodes_license',
		'description'    => __( 'The Shoestrap Shortcodes plugin already contains a pre-activated license number to allow auto-updates. You don\'t need to change anything.', 'shoestrap' ),
		'file'           => __FILE__,
		'single_license' => true
	);

	if ( class_exists( 'SS_EDD_SL_Updater' ) ) {
		$updater = new SS_EDD_SL_Updater( $args );
	}

}
add_action( 'admin_init', 'shoestrap_shortcodes_plugin_updater' );