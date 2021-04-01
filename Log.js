class Log{
    constructor(x,y,height,angle){
        var options ={
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.Body2=MB.rectangle(x,y,20,height,options);
        MW.add(world,this.Body2)
        this.width=20
        Matter.Body.setAngle(this.Body2,angle)
        this.height=height
    }
    display(){
       var angle=this.Body2.angle
       fill(255,0,0) 
    push()
    translate(this.Body2.position.x,this.Body2.position.y)
    rotate(angle)
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();

    }

} 