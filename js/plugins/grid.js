// JavaScript Document
(function() {
    // Creates a new plugin class and a custom listbox
    tinymce.create('tinymce.plugins.shoestrap_grid', {
        createControl: function(n, cm) {
            switch (n) {                
                case 'shoestrap_grid':
                var c = cm.createSplitButton('shoestrap_grid', {
                    title : 'Grid',
                    onclick : function() {
                    }
                });

                c.onRenderMenu.add(function(c, m) {
                    // Boxes & frames
                    m.add({title : 'Fluid grid system', 'class' : 'mceMenuItemTitle'}).setDisabled(1);
                    m.add({title : '12 Columns', onclick : function() {
                        tinyMCE.activeEditor.execCommand( 'mceInsertContent', false, '[shoestrap_row]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[/shoestrap_row]' );
                    }});
                    m.add({title : '6 Columns', onclick : function() {
                        tinyMCE.activeEditor.execCommand( 'mceInsertContent', false, '[shoestrap_row]<br class="nc"/>[shoestrap_col columns="2"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="2"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="2"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="2"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="2"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="2"]Text[/shoestrap_col]<br class="nc"/>[/shoestrap_row]' );
                    }});
                    m.add({title : '4 Columns', onclick : function() {
                        tinyMCE.activeEditor.execCommand( 'mceInsertContent', false, '[shoestrap_row]<br class="nc"/>[shoestrap_col columns="3"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="3"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="3"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="3"]Text[/shoestrap_col]<br class="nc"/>[/shoestrap_row]' );
                    }});
                    m.add({title : '3 Columns', onclick : function() {
                        tinyMCE.activeEditor.execCommand( 'mceInsertContent', false, '[shoestrap_row]<br class="nc"/>[shoestrap_col columns="4"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="4"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="4"]Text[/shoestrap_col]<br class="nc"/>[/shoestrap_row]' );
                    }});
                    m.add({title : '2 Columns', onclick : function() {
                        tinyMCE.activeEditor.execCommand( 'mceInsertContent', false, '[shoestrap_row]<br class="nc"/>[shoestrap_col columns="6"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="6"]Text[/shoestrap_col]<br class="nc"/>[/shoestrap_row]' );
                    }}); 
                    m.add({title : '1 Columns', onclick : function() {
                        tinyMCE.activeEditor.execCommand( 'mceInsertContent', false, '[shoestrap_row]<br class="nc"/>[shoestrap_col columns="12"]Text[/shoestrap_col]<br class="nc"/>[/shoestrap_row]' );
                    }}); 
                    m.add({title : 'Custom Grid', onclick : function() {
                         tb_show('Custom Grid', '../wp-content/plugins/bootstrap-shortcodes/js/plugins/grid.html?TB_iframe=1');
                    }}); 

                });

                // Return the new splitbutton instance
                return c;
                
            }
            return null;
        }
    });
    tinymce.PluginManager.add('shoestrap_grid', tinymce.plugins.shoestrap_grid);
})();