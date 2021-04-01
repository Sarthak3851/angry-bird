class Bird{
    constructor(x,y){
     var options={
         restitution:0.8,
         friction:1.0,
         density:1.0
     }   
     this.BirdBody1=MB.rectangle(x,y,50,50,options)
     MW.add(world,this.BirdBody1.angle);
     this.width=50;
     this.height=50;

    }

    display(){
        var pos = this.BirdBody1.position;
        pos.x = mouseX;
        pos.y = mouseY
        push();
        translate(pos.x, pos.y)
        rotate(this.BirdBody1.angle)
        rectMode(CENTER)
        fill("red")
        rect(0,0,this.width,this.height)
        pop();
    }


    
}