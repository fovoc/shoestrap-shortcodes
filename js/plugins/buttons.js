tinymce.PluginManager.add('shoestrap_buttons', function(editor, url) {
    editor.addButton('shoestrap_buttons', {
        tooltip: 'Buttons',
        icon: 'shoestrap-buttons',
        onclick: function() {
            tinymce.activeEditor.windowManager.open({
                title: 'Buttons',
                url: url + '/buttons.html',
                width: 480,
                height: 320
            });
        }
    });
});