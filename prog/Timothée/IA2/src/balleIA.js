class BalleIA extends Phaser.GameObjects.Sprite{
    constructor(scene) {

        let x = scene.boss.x;
        let y = scene.boss.y;
        let dirxIA = scene.dirxIA;
        let diryIA = scene.diryIA;


        super(scene,x,y,"balle");

        scene.add.existing(this);

        scene.physics.world.enableBody(this)
        this.body.velocity.y = diryIA;
        this.body.velocity.x = dirxIA;
        this.setDisplaySize(10,10);
        this.body.setAllowGravity(false);

        scene.projectiles.add(this);
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