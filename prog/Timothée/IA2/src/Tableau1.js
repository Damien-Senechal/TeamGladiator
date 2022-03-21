class Tableau1 extends Phaser.Scene {


    preload() {
        // Je preload les images autres que Tiled

        this.load.image('circleG','assets/circleG.png');
        this.load.image('circleB','assets/circleB.png');

        this.load.image('trigerZone','assets/circle.png');

        this.load.image('balle','assets/square.png');
        this.load.image('boss','assets/squareY.png');

        // chargement tilemap
        this.load.image("tilemap", "assets/tiles_packed.png");

        // chargement de la map en json
        this.load.tilemapTiledJSON("map", "assets/MapBasique.json");
    }


    create() {
        this.dirx = 0;
        this.diry = 0;
        this.dirxIA = 0;
        this.diryIA = 0;
        this.NbBalle = 40;
        this.chargeur = 10;

        // Création du personnage armé
        this.persoA = this.physics.add.sprite(500, 0, 'circleG').setOrigin(0, 0);
        this.persoA.setDisplaySize(30,30);
        this.persoA.body.setAllowGravity(true);
        this.persoA.setVisible(true);

        // Création de la zone de triger qui permet au boss de tirer
        this.trigerD = this.physics.add.sprite(150, 0,'trigerZone').setOrigin(0, 0);
        this.trigerD.setDisplaySize(200,20);
        this.trigerD.body.setAllowGravity(false);
        this.trigerD.setImmovable(true);

        // Création d'un boss a tuer
        this.boss = this.physics.add.sprite(150, 0,'boss').setOrigin(0, 0);
        this.boss.setDisplaySize(50,50);
        this.boss.body.setAllowGravity(true);
        this.boss.setImmovable(true);

        // Création d'une caisse de munition
        this.munition = this.physics.add.sprite(450, 0,'circleB').setOrigin(0, 0);
        this.munition.setDisplaySize(10,10);
        this.munition.body.setAllowGravity(true);
        this.munition.setImmovable(true);






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

        this.physics.add.collider(this.persoA, platforms);
        this.physics.add.collider(this.munition, platforms);
        this.physics.add.collider(this.boss, platforms);



        this.initKeyboard();

        this.projectiles = this.add.group();
        this.projectiles = this.add.group();
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

    tir(){let me = this;
        this.chargeur -= 1;
        this.balle = new Balle(this);

        this.physics.add.collider(this.boss, this.balle, function (){
            console.log("ok")
            me.boss.body.setEnable(false);
            me.boss.setVisible(false);

            me.balle.body.setEnable(false);
            me.balle.setVisible(false);
        })
    }

    tirIA(){

        this.balleIA=this.physics.add.sprite(-10, -10, 'balle').setOrigin(0, 0).setDisplaySize(5,5).body.velocity.y = this.diryIA.body.velocity.x = dirxIA.setAllowGravity(false)
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

                case Phaser.Input.Keyboard.KeyCodes.E:

                    if(me.checkCollider(me.persoA.x,me.persoA.y,30,30,me.munition.x,me.munition.y,10,10) === true){
                        me.munition.setVisible(false);
                        me.munition.body.setEnable(false);
                        me.NbBalle += 20;
                    }

                    break;

                    // les tires dans chaque directions

                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_FOUR:

                    if(me.chargeur === 0){
                        console.log("plus de balle")
                    }else {
                        me.diry = 0
                        me.dirx = -500
                        me.tir();

                        console.log(me.chargeur)
                    }

                    break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_EIGHT:

                    if(me.chargeur === 0){
                        console.log("plus de balle")
                    }else {

                        me.diry = -500
                        me.dirx = 0
                        me.tir(0,-500);

                        console.log(me.chargeur)
                    }

                    break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_SEVEN:

                    if(me.chargeur === 0){
                        console.log("plus de balle")
                    }else {

                        me.diry = -250
                        me.dirx = -250
                        me.tir();

                    console.log(me.chargeur)
                    }

                    break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_NINE:

                    if(me.chargeur === 0){
                        console.log("plus de balle")
                    }else {

                        me.diry = -250
                        me.dirx = 250
                        me.tir();

                        console.log(me.chargeur)
                    }


                    break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_SIX:

                    if(me.chargeur === 0){
                        console.log("plus de balle")
                    }else{

                        me.diry = 0
                        me.dirx = 500
                        me.tir();

                        console.log(me.chargeur)
                    }


                        break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_THREE:

                    if(me.chargeur === 0){
                        console.log("plus de balle")
                    }else {

                        me.diry = 250
                        me.dirx = 250
                        me.tir();
                        console.log(me.chargeur)
                    }


                        break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_TWO:

                    if(me.chargeur === 0){
                        console.log("plus de balle")
                    }else {

                        me.diry = 500
                        me.dirx = 0
                        me.tir();
                        console.log(me.chargeur)
                    }


                        break;
                case Phaser.Input.Keyboard.KeyCodes.NUMPAD_ONE:

                    if(me.chargeur === 0){
                        console.log("plus de balle")
                    }else {

                        me.diry = 250
                        me.dirx = -250
                        me.tir();
                        console.log(me.chargeur)
                    }


                        break;

                case Phaser.Input.Keyboard.KeyCodes.R:



                    if(me.NbBalle > 10 && me.chargeur === 0 ) {
                        me.chargeur = 10
                        me.NbBalle -= 10
                        console.log("rechargement")
                    }else if (me.chargeur !== 0){
                        console.log("j'ai encore des balles")
                    }else{
                        console.log("plus rien du tout")
                    }
                    break;
            }
        })
    }


    update(){

        this.trigerD.x = this.boss.x+20
        this.trigerD.y = this.boss.y+20

        for(var i = 0; i < this.projectiles.getChildren().length; i++){
            var tir = this.projectiles.getChildren()[i];
            tir.update();
        }

        this.physics.add.overlap(this.persoA, this.trigerD, function (){
            this.dirxIA= 500;
            this.diryIA= 0;
            this.balleIA = new BalleIA(this);

        })

    }

    // fin du programme
}