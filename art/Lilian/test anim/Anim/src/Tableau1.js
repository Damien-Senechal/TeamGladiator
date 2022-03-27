class Tableau1 extends Phaser.Scene{

    preload(){

        this.load.spritesheet('walk', 'assets/anims/tilesheet-walk.png',{ frameWidth: 512, frameHeight: 512 });
        this.load.spritesheet('idle', 'assets/anims/tilesheet-idle.png',{ frameWidth: 512, frameHeight: 512 });
        this.load.spritesheet('shield', 'assets/anims/tilesheet-shield.png',{ frameWidth: 512, frameHeight: 512 });
        this.load.spritesheet('sword', 'assets/anims/tilesheet-sword2.png',{ frameWidth: 512, frameHeight: 512 });
        this.load.spritesheet('up', 'assets/anims/tilesheet-gun-up.png',{ frameWidth: 512, frameHeight: 512 });
        this.load.spritesheet('midle', 'assets/anims/tilesheet-gun-midle.png',{ frameWidth: 512, frameHeight: 512 });
        this.load.spritesheet('down', 'assets/anims/tilesheet-gun-down.png',{ frameWidth: 512, frameHeight: 512 });

    }

    create() {



        this.player= this.add.sprite(0, 0, 'walk').setOrigin(0,0);
        this.player.setVisible(false)

/**     CREATION ANIMATION MARCHE**/
        this.playerwalk = this.add.sprite(-100, 0, 'walk').setOrigin(0,0);

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('walk', {start: 0, end: 119}),
            frameRate: 60,
            repeat: -1
        });


        this.playerwalk.anims.play('run');
        this.playerwalk.setVisible(true)


        this.playeridle = this.add.sprite(100, 0, 'idle').setOrigin(0,0);
        this.playeridle.setVisible(true)
        this.anims.create({
            key: 'idlea',
            frames: this.anims.generateFrameNumbers('idle', {start: 0, end: 119}),
            frameRate: 30,
            repeat: -1
        });
        this.playeridle.anims.play('idlea');


        this.playershield = this.add.sprite(450, 0, 'shield').setOrigin(0,0);
        this.anims.create({
            key: 'shield',
            frames: this.anims.generateFrameNumbers('shield', {start: 0, end: 10}),
            frameRate: 25,
            repeat: -1,
            delay:500,
            repeatDelay:500
        });
        this.playershield.anims.play('shield');
        this.playershield.setVisible(true)




        this.playersword= this.add.sprite(250, 0, 'sword').setOrigin(0,0);
        this.anims.create({
            key: 'sword',
            frames: this.anims.generateFrameNumbers('sword', {start: 0, end: 8}),
            frameRate: 30,
            repeat: -1
        });
        this.playersword.flipX=true;
        this.playersword.anims.play('sword');

        this.playersword.setVisible(true)



        this.playerup= this.add.sprite(250, 0, 'up').setOrigin(0,0);
        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('up', {start: 0, end: 6}),
            frameRate: 30,
            repeat: -1
        });
        this.playerup.anims.play('up');
        this.playerup.setVisible(false)

        this.playermidle= this.add.sprite(600, 0, 'midle').setOrigin(0,0);
        this.anims.create({
            key: 'midle',
            frames: this.anims.generateFrameNumbers('midle', {start: 0, end: 6}),
            frameRate: 30,
            repeat: -1,
            repeatDelay:2000
        });
        this.playermidle.flipX=true
        this.playermidle.anims.play('midle');
        this.playermidle.setVisible(true)


        this.playerdown= this.add.sprite(250, 0, 'down').setOrigin(0,0);
        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('down', {start: 0, end: 6}),
            frameRate: 30,
            repeat: -1
        });
        this.playerdown.anims.play('down');
        this.playerdown.setVisible(false)











        this.initKeyboard()
    }






     initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    this.playerwalk.setVisible(true)
                    this.playersword.setVisible(true)

                    break;




            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.S:
                    this.playersword.setVisible(true)
                    break

            }
        });
    }
    update(){

    }
}