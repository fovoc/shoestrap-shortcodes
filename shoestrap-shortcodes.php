<?php
/*
Plugin Name: Shoestrap Shortcodes
Plugin URI: http://shoestrap.org
Description: A simple shortcode generator. Adds buttons, columns and alerts to your Shoestrap theme.
Version: 1.1
Author: @aristath, @fovoc
Author URI: http://wpmu.io

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

// Include the EDD SL Plugin updater if it's not already included
if ( ! class_exists( 'EDD_SL_Plugin_Updater' ) ) {
	include( dirname( __FILE__ ) . '/updater/EDD_SL_Plugin_Updater.php' );
}

/**
 * The plugin updater
 */
function shoestrap_shortcodes_plugin_updater() {

	$edd_updater = new EDD_SL_Plugin_Updater( 'http://shoestrap.org', __FILE__, array( 
			'version' 	=> '1.1',
			'license'   => '84f2efdcfd77445058ada959461aec7d',
			'item_name' => 'Shoestrap Shortcodes',
			'author' 	=> 'aristath, fovoc',
		)
	);
}
add_action( 'admin_init', 'shoestrap_shortcodes_plugin_updater' );


function shoestrap_shortcodes_plugin_updater_activate_license() {
	global $wp_version;

	// If the license is valid there's no need to process this further.
	if ( get_transient( 'shoestrap_shortcodes_license_status' ) == 'valid' ) {
		return;
	}

	$api_params = array(
		'edd_action' => 'activate_license',
		'license'    => '84f2efdcfd77445058ada959461aec7d',
		'item_name'  => urlencode( 'Shoestrap Shortcodes' )
	);

	// Get the server response
	$response = wp_remote_get( add_query_arg( $api_params, 'http://shoestrap.org' ), array( 'timeout' => 15, 'sslverify' => false ) );

	// Make sure no error has occured
	if ( is_wp_error( $response ) ) {
		return false;
	}

	// Get the license data
	$license_data = json_decode( wp_remote_retrieve_body( $response ) );

	if ( 'valid' == $license_data->license ) {
		// Set a 72-hour transient.
		set_transient( 'shoestrap_shortcodes_license_status', $license_data->license, 72 * 60 * 60 );
	} else {
		// Set a 1-hour transient.
		set_transient( 'shoestrap_shortcodes_license_status', $license_data->license, 1 * 60 * 60 );
	}
}
add_action('admin_init', 'shoestrap_shortcodes_plugin_updater_activate_license');
