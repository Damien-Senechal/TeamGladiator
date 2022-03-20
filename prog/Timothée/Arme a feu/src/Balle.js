class Balle  {
    constructor(Tableau1){
        this.scene= Tableau1
        this.balle = this.scene.physics.add.sprite(-10, -10, 'balle').setOrigin(0, 0);
        this.balle.setDisplaySize(5,5);
        this.balle.body.setMaxVelocityX(800);
        this.balle.body.setMaxVelocityY(800);
        this.balle.body.setAllowGravity(false)


    }
}