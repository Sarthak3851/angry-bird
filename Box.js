class Box{
    constructor(x, y, width, height){
        var options ={
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.Body1 = MB.rectangle(x, y, width, height,options);
        MW.add(world,this.Body1);
        this.width = width;
        this.height = height;

    }

    display(){
        push();
        translate( this.Body1.position.x,  this.Body1.position.y);
        rotate( this.Body1.angle);
        rectMode(CENTER);
        fill(0,0,255)
        rect(0,0,this.width,this.height);
        pop();
    }
}