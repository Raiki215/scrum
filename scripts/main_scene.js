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
        this.load.image('sky', 'assets/background.png');
        this.load.image('taro', 'assets/taro.png');
        this.load.image('hanako', 'assets/hanako.png');
        this.load.image('apple', 'assets/fruit_ringo.png');
        this.load.image('orange', 'assets/fruit_orange.png');
    }

        // シーン初期化処理
    create() {
        // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.add.image(400, 300, 'sky');
        const taro = this.physics.add.sprite(50, 50, 'taro');
        const hanako = this.physics.add.sprite(750, 400, 'hanako');

        this.taro = taro;
        this.hanako = hanako;

        let staticGroup = this.physics.add.staticGroup();
        for(let i=0; i<5; i++){
            let  randx = Phaser.Math.Between(25, 775) ;  // y は　50～750の間の値
            let randy =  Phaser.Math.Between(25, 425) ;  // y は　50～200の間の値
            staticGroup.create(randx, randy , 'orange');
        }
        //ランダムな場所に生成
        for(let i=0; i<5; i++){
            let  randa = Phaser.Math.Between(25, 775) ;  // y は　50～750の間の値
            let randb =  Phaser.Math.Between(25, 425) ;  // y は　50～200の間の値
            staticGroup.create(randa, randb , 'apple');
        }

        this.physics.add.overlap(taro, staticGroup, collectfruit, null, this);
        this.physics.add.overlap(hanako, staticGroup, collectfruit, null, this);
        function collectfruit(){
            this.physics.pause();
        }

    }

    // 毎フレーム実行される繰り返し処理
    update() {
        let cursors = this.input.keyboard.createCursorKeys();

        if(cursors.up.isDown){
            console.log("Up!!");
            this.taro.setVelocityY(-40);// 上方向の速度を設定
            this.hanako.setVelocityY(40);
        } else if(cursors.down.isDown){
            console.log("down!!");
            this.taro.setVelocityY(40);// 下方向の速度を設定
            this.hanako.setVelocityY(-40);
        }else if(cursors.left.isDown){
            console.log("Left");
            this.taro.setVelocityX(-40);// 左方向の速度を設定
            this.hanako.setVelocityX(40);
        }else if(cursors.right.isDown){
            console.log("Right!!");
            this.taro.setVelocityX(40);// 右方向の速度を設定
            this.hanako.setVelocityX(-40);
        }else{
            this.taro.setVelocityX(0);// 横方向の速度を0
            this.taro.setVelocityY(0);// 縦方向の速度を0
            this.hanako.setVelocityX(0);
            this.hanako.setVelocityY(0);
        }
    }
}