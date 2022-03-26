class Tableau1 extends Phaser.Scene {



    preload() {
        // Je preload les images autres que Tiled
        this.load.image('circle','assets/circle.png');
        this.load.image('circleG','assets/circleG.png');
        this.load.image('circleB','assets/circleB.png');

        this.load.image('grenouille','assets/vf2.png');

        this.load.image('Arme1','assets/square.png');
        this.load.image('Arme2','assets/squareY.png');

        this.load.image('shield','assets/shield.png' )

        // chargement tilemap
        this.load.image("tilemap", "assets/tiles_packed.png");

        // chargement de la map en json
        this.load.tilemapTiledJSON("map", "assets/MapBasique.json");
    }


    create() {
        let me=this;
        this.gauche = true;
        this.kirby = false;

        // Création du personnage de base
        this.perso = this.physics.add.sprite(500, 0, 'circle').setOrigin(0, 0);
        this.perso.setDisplaySize(30,30);
        this.perso.body.setAllowGravity(true);
        this.perso.setVisible(true);

        // Création du personnage de base
        this.ai = this.physics.add.sprite(200, 0, 'grenouille').setOrigin(0, 0);
        this.ai.setDisplaySize(50,75);
        this.ai.body.setAllowGravity(false);
        this.ai.setVisible(true);



        // chargement de la map
        const map = this.add.tilemap("map");
        // chargement du tileset
        const tileset = map.addTilesetImage(
            "game_tile",
            "tilemap"
        );

        // chargement du calque plateformes
        const platforms = map.createLayer(
            "calque_plateformes",
            tileset
        );

        platforms.setCollisionByExclusion(-1, true);


        // target or player's x, y
        const tx = this.perso.x
        const ty = this.perso.y

        const iax = this.ai.x;
        const iay = this.ai.y;





        // Creation des collision

        this.physics.add.collider(this.perso, platforms);


        this.physics.add.collider(this.ai, platforms);

        this.physics.add.collider(this.ai, this.perso,function () {
            me.ai.setVisible(false)
            me.ai.body.setEnable(false);
        });



    }


    update(){

        this.initKeyboard();

    if(this.kirby == true) {
        console.log("ejbgfs")
        if (this.perso.x <= this.ai.x) {
            this.ai.setVelocityX(-200)
        } else {
            this.ai.setVelocityX(200)
        }

        if (this.perso.y <= this.ai.y) {
            this.ai.setVelocityY(-200)
        } else {
            this.ai.setVelocityY(200)
        }
    }else{
        this.ai.setVelocityY(0)
        this.ai.setVelocityX(0)
    }

    }
    initKeyboard() {
        let me = this;

        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {

                case Phaser.Input.Keyboard.KeyCodes.Q:

                    me.perso.setVelocityX(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.D:

                    me.perso.setVelocityX(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.kirby = false;
                    break;
            }
        })
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {

                case Phaser.Input.Keyboard.KeyCodes.Q:
                        me.gauche = true;
                        me.perso.setVelocityX(-300);

                    break;

                case Phaser.Input.Keyboard.KeyCodes.D:
                        me.gauche = false;
                        me.perso.setVelocityX(300);

                    break;

                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.kirby = true
                    break;
            }
        })
    }


    // fin du programme
}