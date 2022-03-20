class Balle extends Phaser.GameObjects.Sprite{
    constructor(scene) {

        let x = scene.persoA.x;
        let y = scene.persoA.y;

        super(scene,x,y,"balle");
        scene.projectiles.add(this);

        scene.add.existing(this);

        scene.physics.world.enableBody(this)
        this.body.velocity.y = -250;
        this.setDisplaySize(10,10);
        this.body.setAllowGravity(false);
    }

    update(){
        if(this.y < 50 ){
            this.destroy();
            console.log("kog")
        }
    }

}