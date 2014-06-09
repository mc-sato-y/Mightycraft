var Map = function(game) {
    this.game = game;
};

Map.prototype.create = function() {
    this.game.preload('./images/map/maruta.png');
};