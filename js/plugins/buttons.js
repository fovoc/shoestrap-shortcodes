// JavaScript Document
(function() {
    // Creates a new plugin class and a custom listbox
    tinymce.create('tinymce.plugins.shoestrap_buttons', {
        createControl: function(n, cm) {
            switch (n) {                
                case 'shoestrap_buttons':
                var c = cm.createSplitButton('shoestrap_buttons', {
                    title : 'Buttons',
                    onclick : function() {

                    }
                    //'class':'mceListBoxMenu'
                });
                

                c.onRenderMenu.add(function(c, m) {
                    m.onShowMenu.add(function(c,m){
                        jQuery('#menu_'+c.id).height('auto').width('auto');
                        jQuery('#menu_'+c.id+'_co').height('auto').addClass('mceListBoxMenu'); 
                        var $menu = jQuery('#menu_'+c.id+'_co').find('tbody:first');
                        if($menu.data('added')) return;
                        $menu.append('');
                        $menu.append('<div style="padding: 0 10px 10px"><label>Size<br/>\
                        <select name="size">\
                        <option value="extra-small">Mini</option>\
                        <option value="small">Small</option>\
                        <option value="medium" selected>Normal</option>\
                        <option value="large">Large</option>\
                        </select></label>\
                        <label>Types<br/>\
                        <select name="type">\
                        <option value="Default"> Default</option>\
                        <option value="Primary"> Primary</option>\
                        <option value="Success"> Success</option>\
                        <option value="Info" selected> Info</option>\
                        <option value="Warning"> Warning</option>\
                        <option value="Danger"> Danger</option>\
                        <option value="Link"> Link</option>\
                        </select>\
                        <label>Link<br />\
                        <input type="text" name="link" value="#" onclick="this.select()"  /></label>\
                        </div>');

                        jQuery('<input type="button" class="button" value="Insert" />').appendTo($menu)
                                .click(function(){
                                    var size = $menu.find('select[name=size]').val();
                                    var type = $menu.find('select[name=type]').val();
                                    var link = $menu.find('input[name=link]').val();
                                    tinymce.activeEditor.execCommand('mceInsertContent',false,'[shoestrap_button size="'+size.toLowerCase()+'" type="'+type.toLowerCase()+'" value="'+type+'" href="'+link+'"]Button Label[/shoestrap_button]');
                                    c.hideMenu();
                                }).wrap('<div style="padding: 0 10px 10px"></div>')
                 
                        $menu.data('added',true); 

                    });

                   // XSmall
                    m.add({title : 'Buttons', 'class' : 'mceMenuItemTitle'}).setDisabled(1);

                 });
                // Return the new splitbutton instance
                return c;
                
            }
            return null;
        }
    });
    tinymce.PluginManager.add('shoestrap_buttons', tinymce.plugins.shoestrap_buttons);
})();