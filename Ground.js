class Ground {
    constructor(x,y,width,height){
        var options={ 
            
            isStatic : true
        }
    
       this.ground = MB.rectangle(x,y,width,height, options);
        MW.add(world,this.ground);
        this.height=height
        this.width=width
    }
    
    display(){
    push()
    translate(this.ground.position.x,this.ground.position.y)
    rotate(this.ground.angle)
    rectMode(CENTER)
    fill("brown")
    rect(0,0,this.width,this.height)
    pop();
}

}