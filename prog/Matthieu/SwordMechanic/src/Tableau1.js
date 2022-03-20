
class Tableau1 extends Phaser.Scene {

    preload() {
        this.load.image('body', 'asset/square.png');
        this.load.image('sword', 'asset/sword.png');
    }


    create() {

        let me=this;


        this.warrior = this.add.container(0, 0);

        this.knight = this.physics.add.image(0, 300, 'body').setOrigin(0, 0);
        this.knight.setDisplaySize(150, 400);
        this.knight.setTintFill(0x0f00ff);
        this.knight.body.setAllowGravity(false);
        this.knight.setImmovable(true);
        this.knight.body.setVelocityX(0);
        this.warrior.add(this.knight);

        this.sword = this.physics.add.image(100, 100, 'sword').setOrigin(0, 0);
        this.sword.setScale(0.5);
        this.sword.body.setAllowGravity(false);
        this.sword.setImmovable(true);
        this.sword.body.setVelocityX(0);
        this.sword.body.setEnable(false);
        this.sword.setVisible(false);
        this.warrior.add(this.sword);

        this.target = this.physics.add.image(1000, 300, 'body').setOrigin(0, 0);
        this.target.body.setAllowGravity(false);
        this.target.setImmovable(true);

        this.physics.add.collider(this.sword, this.target, function (){
            console.log('touche');
            me.disparait(me.target);
        })

        this.initKeyboard();
    }

    initKeyboard()
     {
        let me = this;

        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.D:

                    me.warrior.x +=10;
                    /**me.knight.body.setVelocityX(200);
                    me.sword.body.setVelocityX(200);**/
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.warrior.x -=10;
                    /**me.knight.body.setVelocityX(-200);
                    me.sword.body.setVelocityX(-200);**/
                    break;
                case Phaser.Input.Keyboard.KeyCodes.SPACE:
                    me.sword.body.setEnable(true);
                    me.sword.setVisible(true);
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.D:
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    /**me.sword.body.setVelocityX(0);
                    me.knight.body.setVelocityX(0);**/
                    break;
                case Phaser.Input.Keyboard.KeyCodes.SPACE:
                    me.sword.body.setEnable(false);
                    me.sword.setVisible(false);
            }
        });
    }

    disparait(obstacle){

        obstacle.body.setEnable(false);
        obstacle.setVisible(false);
    }


    update()
    {

    }


}
