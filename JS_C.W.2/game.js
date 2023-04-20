var game;
var gameOptions = {
    birdGravity: 1100,
    birdSpeed: 230,
    birdFlapPower: 500,
    minPipeHeight: 150,
    pipeDistance: [320, 480],
    pipeHole: [200, 260],

    // local storage object name
    localStorageName: 'bestFlappyScore'
}
window.onload = function() {
    let gameConfig = {
        type: Phaser.AUTO,
        backgroundColor:0x87ceeb,
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            parent: 'thegame',
            width: 640,
            height: 960
        },
        pixelArt: true,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {
                    y: 0
                }
            }
        },
        scene: playGame
    }
    game = new Phaser.Game(gameConfig);
    window.focus();
}
class playGame extends Phaser.Scene{
    constructor(){
        super('PlayGame');
    }
    preload(){
        this.load.image('bg', 'bg.png');
        this.load.spritesheet('bird', 
        'bird.svg',
        { frameWidth: 96, frameHeight: 64 }
        );
        this.load.image('pipe', 'pipe.png');
        this.load.audio('bgMusic', ['godTheme.mp3']);
    }
    create(){
        this.bgMusic = this.sound.add("bgMusic");
        var musicConfig = {
            volume: 0.15,
            loop: true
        }
        this.bgMusic.play(musicConfig);
        this.add.image(320, 480, 'bg');
        this.pipeGroup = this.physics.add.group();
        this.pipePool = [];
        for(let i = 0; i < 4; i++){
            this.pipePool.push(this.pipeGroup.create(0, 0, 'pipe').setScale(2));
            this.pipePool.push(this.pipeGroup.create(0, 0, 'pipe').setScale(2));
            this.placePipes(false);
        }
        this.pipeGroup.setVelocityX(-gameOptions.birdSpeed);
        this.bird = this.physics.add.sprite(80, game.config.height / 2, 'bird');
        this.bird.body.gravity.y = gameOptions.birdGravity;

        this.anims.create({
            key: 'top',
            frames: this.anims.generateFrameNumbers('bird', {start: 0, end:9}),
            frameRate: 20,
        });

        this.input.on('pointerdown', this.flap, this);
        this.score = 0;
        this.topScore = localStorage.getItem(gameOptions.localStorageName) == null ? 0 : localStorage.getItem(gameOptions.localStorageName);
        this.scoreText = this.add.text(10, 10, '',{color: '#000000', fontSize: 32, fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'});
        this.updateScore(this.score);

    }
    updateScore(inc){
        this.score += inc;
        this.scoreText.text = 'Score: ' + this.score + '\nBest: ' + this.topScore;
    }
    placePipes(addScore){
        let rightmost = this.getRightmostPipe();
        let pipeHoleHeight = Phaser.Math.Between(gameOptions.pipeHole[0], gameOptions.pipeHole[1]);
        let pipeHolePosition = Phaser.Math.Between(gameOptions.minPipeHeight + pipeHoleHeight / 2, game.config.height - gameOptions.minPipeHeight - pipeHoleHeight / 2);
        this.pipePool[0].x = rightmost + this.pipePool[0].getBounds().width + Phaser.Math.Between(gameOptions.pipeDistance[0], gameOptions.pipeDistance[1]);
        this.pipePool[0].y = pipeHolePosition - pipeHoleHeight / Number((Math.random() * 0.5) + 1.3).toFixed(1);
        this.pipePool[0].setOrigin(0, 1);
        this.pipePool[1].x = this.pipePool[0].x;
        this.pipePool[1].y = pipeHolePosition + pipeHoleHeight / Number((Math.random() * 0.5) + 1.3).toFixed(1);
        this.pipePool[1].setOrigin(0, 0);
        this.pipePool = [];
        if(addScore){
            this.updateScore(1);
        }
    }
    flap(){
        this.bird.body.velocity.y = -gameOptions.birdFlapPower;
        this.bird.anims.play('top', true);
    }
    getRightmostPipe(){
        let rightmostPipe = 0;
        this.pipeGroup.getChildren().forEach(function(pipe){
            rightmostPipe = Math.max(rightmostPipe, pipe.x);
        });
        return rightmostPipe;
    }
    update(){
        this.physics.world.collide(this.bird, this.pipeGroup, function(){
            this.die();
        }, null, this);
        if(this.bird.y > game.config.height || this.bird.y < 0){
            this.die();
        }
        this.pipeGroup.getChildren().forEach(function(pipe){
            if(pipe.getBounds().right < 0){
                this.pipePool.push(pipe);
                if(this.pipePool.length == 2){
                    this.placePipes(true);
                }
            }
        }, this)
    }
    die(){
        localStorage.setItem(gameOptions.localStorageName, Math.max(this.score, this.topScore));
        this.bird.setTint(0xff0000);
        this.bgMusic.stop();
        this.scene.pause('PlayGame', this.bird);
        setTimeout(() => {
            this.scene.start('PlayGame');
        }, 200);
        
    }
}
