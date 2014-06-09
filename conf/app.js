requirejs.config({
    baseUrl: '../js',

    paths: {
        enchant: ['/lib/enchant/lang/ja/enchant'],
        Game: ['/system/model/Game'],
        Map: ['/system/mode/Map']
    },

    shim: {
        enchant: {
            exports: 'enchant'
        },
        Game: {
            exports: 'Game'
        },
        Map: {
            exports: 'Map'
        }
    }
});