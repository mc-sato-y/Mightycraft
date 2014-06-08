enchant();

window.onload = function() {
    var game = new Game(640, 320);

    // ゲームで使う素材を読み込む
    game.preload('./js/enchant/images/chara1.png')

    game.onload = function() {
        // クマを配置
        var bear = new Sprite(32, 32);
        bear.image = game.assets['./js/enchant/images/chara1.png'];

        game.rootScene.addChild(bear);

        // クマアニメーション用の設定
        bear.frameIndex = 0;
        var frameList = [0, 1, 2];

        bear.onenterframe = function() {
            if (game.input.right) {
                this.x += 1;

                // クマをアニメーションさせる
                if (game.frame %2 == 0) {
                    this.frameIndex++;
                    this.frameIndex %= frameList.length;
                    this.frame = frameList[this.frameIndex];
                }
            }
        };
    }

    game.start();
}