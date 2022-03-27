class Balle extends Phaser.GameObjects.Sprite{
    constructor(scene) {

        let x = scene.persoA.x;
        let y = scene.persoA.y;

        let boss = scene.boss;


        super(scene,x,y,"balle");

        scene.add.existing(this);

        scene.physics.world.enableBody(this)
        this.setDisplaySize(10,10);
        this.body.setAllowGravity(false);

        scene.projectiles.add(this);

        let me = this;

        this.scene.physics.moveToObject(this, this.scene.target, 500);

    }

    update(){

        if(this.y < 0 ){
            this.destroy();
        }
        if(this.y > 300 ){
            this.destroy();
        }
        if(this.x < 0 ){
            this.destroy();
        }
        if(this.x > 1000 ){
            this.destroy();
        }

    }

}