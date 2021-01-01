class Bob  {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:1.0,
            friction:0,
            density:0.8
         }
         //this.image= loadImage("paper ball.png");
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, (this.r/2), options);
        World.add(world, this.body);
    }

    display(){

        var bobPos = this.body.position

        push()
        translate(bobPos.x, bobPos.y);
        rectMode(CENTER);
        stroke("white");
        fill("white");
        ellipse(0,0, this.r, this.r);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
        
    }

}