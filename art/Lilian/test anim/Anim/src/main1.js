let gameConfig = {
    type: Phaser.AUTO,
    width: 1000,
    height: 500,
    /**backgroundColor: '#000000',**/
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 9.81 }
        }
    },
    scene: new Tableau1()
};
let game = new Phaser.Game(gameConfig);
