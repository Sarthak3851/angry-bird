class Pig{
    constructor(x,y){
        var option = {
            'restitution':0.8,
            'friction':0.8,
            'density':1.0
        }
        this.body=MB.rectangle(x,y,50,50,option) ;
        MW.add(world,this.body)
        this.width=50
        this.height=50
    }
    display(){
        var angle=this.body.angle
        push();
        translate( this.body.position.x,  this.body.position.y);
        rotate( angle);
        rectMode(CENTER);
        fill("green")
        rect(0,0,this.width,this.height);
        pop();
    }
}
//  bird,strcture square wood,rectangle wood,sling shot,pigs