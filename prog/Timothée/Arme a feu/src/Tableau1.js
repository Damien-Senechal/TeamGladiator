class Tableau1 extends Phaser.Scene {


    preload() {
        // Je preload les images autres que Tiled

        this.load.image('circleG','assets/circleG.png');


        this.load.image('balle','assets/square.png');
        this.load.image('boss','assets/squareY.png');

        // chargement tilemap
        this.load.image("tilemap", "assets/tiles_packed.png");

        // chargement de la map en json
        this.load.tilemapTiledJSON("map", "assets/MapBasique.json");
    }


    create() {

        this.ennemis = this.add.container(0, 0);

        // Création du personnage armé
        this.persoA = this.physics.add.sprite(500, 0, 'circleG').setOrigin(0, 0);
        this.persoA.setDisplaySize(30,30);
        this.persoA.body.setAllowGravity(true);
        this.persoA.setVisible(true);


        //Balle
        this.Mballe = new Balle(this)


        // Création d'un boss a tuer
        this.boss = this.physics.add.sprite(150, 0,'balle').setOrigin(0, 0);
        this.boss.setDisplaySize(50,50);
        this.boss.body.setAllowGravity(true);
        this.boss.setImmovable(true);
        this.ennemis.add(this.boss);





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

        // Creation des collision

        this.physics.add.collider(this.ennemis, this.target, function (){
            console.log('touche');
            me.disparait(me.target);
        })


        this.physics.add.collider(this.persoA, platforms);

        this.physics.add.collider(this.boss, platforms);

    }

    // fonction pour faire regarder s'il y a un overlaps donc deux objets qui se touche pour l'utilisé plus facilement.

    checkCollider(Objet1x,Objet1y,Object1TailleLargeur,Object1TailleHauteur,Objet2x,Objet2y,Objet2TaileLargeur,Objet2TailleHauteur){
        if (Objet1x + Object1TailleLargeur > Objet2x && Objet1x < Objet2x + Objet2TaileLargeur
                                            &&
            Objet1y + Object1TailleHauteur > Objet2y && Objet1y < Objet2y + Objet2TailleHauteur) {
            // Si toutes les conditons sont vrais alors il y a bien un overlaps, on renvoie donc true/vrai a notre foncion sinon on ne renvoie rien
            return true
        }
    }


    tir(dirX,dirY){
        this.Mballe.balle.x = this.persoA.x+10
        this.Mballe.balle.y = this.persoA.y+10
        this.Mballe.balle.setVelocityX(dirX)
        this.Mballe.balle.setVelocityY(dirY)

    }

    initKeyboard() {
        let me = this;

        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {

                case Phaser.Input.Keyboard.KeyCodes.Q:

                    me.persoA.setVelocityX(0);

                    break;

                case Phaser.Input.Keyboard.KeyCodes.D:


                    me.persoA.setVelocityX(0);

                    break;
            }
        })
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {

                case Phaser.Input.Keyboard.KeyCodes.Q:

                        me.persoA.setVelocityX(-300);

                    break;

                case Phaser.Input.Keyboard.KeyCodes.D:

                        me.persoA.setVelocityX(300);

                    break;

                    // les tires dans chaques directions

                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_FOUR:


                    me.tir(-500,0);

                    break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_EIGHT:


                    me.tir(0,-500);

                    break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_SEVEN:


                    me.tir(-250,-250);

                    break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_NINE:


                    me.tir(250,-250);

                    break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_SIX:


                    me.tir(500,0);

                    break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_THREE:


                    me.tir(250,250);

                    break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_TWO:


                    me.tir(0,500);

                    break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_ONE:


                    me.tir(-250,250);

                    break;
            }
        })
    }


    update(){

        this.initKeyboard();

        if(this.checkCollider(this.Mballe.balle.x,this.Mballe.balle.y,10,10,this.boss.x,this.boss.y,50,50) === true){
            this.boss.body.setEnable(false);
            this.boss.setVisible(false);
        }


    }

    // fin du programme
}