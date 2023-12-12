// シーンクラス

// 他のJSファイルから呼び出された場合はシーンを返す

class MainScene extends Phaser.Scene {

    // コンストラクタ
    constructor() {
        // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
        super('MainScene');
    }
    // シーンの事前読み込み処理

    preload() {
        // 画像の読み込み(使用する時の名前, パス)
        this.load.image('sky', 'assets/sky.png');
        this.load.image('back', 'assets/back.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('alien1', 'assets/alien1.png');
        this.load.image('alien2', 'assets/alien2.png');
        this.load.image('alien3', 'assets/alien3.png');
        this.load.image('platform', 'assets/platform.png');
        this.load.image('block', 'assets/block.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('coin', 'assets/coin.png');
    }

        // シーン初期化処理
        create() {
            // 単体画像をシーンに追加(X座標,Y座標,画像名)
            this.add.image(400, 300, 'sky');
            let  randx = Phaser.Math.Between(50, 750) ;  // xは　50～750の間の値
            let randy =  Phaser.Math.Between(50, 200) ;  // y は　50～200の間の値
            let star_randx = Phaser.Math.Between(50, 750) ;
            let star_randy =  Phaser.Math.Between(50, 200) ;
            // 星を(200,200)に追加
            // エイリアンを(200,200)に追加
             // 単体画像をシーンに追加(X座標,Y座標,画像名)

            // 星を(200,200)に追加
            // this.add.image(200, 200, 'star');
            // エイリアンを(200,200)に追加
            this.player = this.add.image(500, 350, 'alien1');
            this.player2 = this.add.image(200, 300, 'alien2');
            this.player3 = this.add.image(100, 100, 'alien3');
            // プレイヤーの移動方向フラグを設定　１：右向き　−１：左向き
            this.player_direction = 1;
            // this.add.image(750, 300, 'alien2');
        }

    // 毎フレーム実行される繰り返し処理
    update() {
        //上下に動く
        if (this.player.y >= D_HEIGHT - 100) this.player_direction = -1;
        if (this.player.y <= 100) this.player_direction = 1;

        if (this.player_direction == 1) {
            this.player.y += 5;
        } else {
            this.player.y -= 5;
        }

        //左右に動く
        if(this.player2.x >= D_WIDTH - 100) this.player_direction = -1;
        if (this.player2.x <= 100) this.player_direction = 1;

        if (this.player_direction == 1) {
            this.player2.x += 25;
        } else {
            this.player2.x -= 25;
        }

        //斜めに動く
        if(this.player3.y >= D_HEIGHT - 100) this.player_direction = -1
        if (this.player3.y <= 100) this.player_direction = 1;

        if(this.player3.x >= D_WIDTH - 100) this.player_direction = -1;
        if (this.player3.x <= 100) this.player_direction = 1;

        if (this.player_direction == 1) {
            this.player3.x += 10;
            this.player3.y += 10;

        } else {
            this.player3.x -= 10;
            this.player3.y -= 10;

        }
    }
}