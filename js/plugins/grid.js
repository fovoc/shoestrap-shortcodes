tinymce.PluginManager.add('shoestrap_grid', function(editor, url) {
    editor.addButton('shoestrap_grid', {
        type: 'menubutton',
        tooltip: 'Grid',
        icon: 'shoestrap-grid',
        menu: [
            { text: '12 Columns', onclick: function() { editor.insertContent('[shoestrap_row]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="1"]Text[/shoestrap_col]<br class="nc"/>[/shoestrap_row]'); } },
            { text: '6 Columns',  onclick: function() { editor.insertContent('[shoestrap_row]<br class="nc"/>[shoestrap_col columns="2"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="2"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="2"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="2"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="2"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="2"]Text[/shoestrap_col]<br class="nc"/>[/shoestrap_row]'); } },
            { text: '4 Columns',  onclick: function() { editor.insertContent('[shoestrap_row]<br class="nc"/>[shoestrap_col columns="3"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="3"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="3"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="3"]Text[/shoestrap_col]<br class="nc"/>[/shoestrap_row]'); } },
            { text: '3 Columns',  onclick: function() { editor.insertContent('[shoestrap_row]<br class="nc"/>[shoestrap_col columns="4"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="4"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="4"]Text[/shoestrap_col]<br class="nc"/>[/shoestrap_row]'); } },
            { text: '2 Columns',  onclick: function() { editor.insertContent('[shoestrap_row]<br class="nc"/>[shoestrap_col columns="6"]Text[/shoestrap_col]<br class="nc"/>[shoestrap_col columns="6"]Text[/shoestrap_col]<br class="nc"/>[/shoestrap_row]'); } },
            { text: '1 Columns',  onclick: function() { editor.insertContent('[shoestrap_row]<br class="nc"/>[shoestrap_col columns="12"]Text[/shoestrap_col]<br class="nc"/>[/shoestrap_row]'); } },
            {
                text: 'Custom Grid',
                onclick: function() {
                    tinymce.activeEditor.windowManager.open({
                        title: 'Custom Grid',
                        url: url + '/grid.html',
                        width: 580,
                        height: 420
                    });
                }
            }
        ]
    });
});
