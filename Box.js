class Box  {
    constructor(x,y)  {
        var options={
            isStatic:false
        }
        
        this.body = Bodies.rectangle(x,y,20,30,options)
        this.width = 20;
        this.height = 30;
        this.Visisbility=255;
        World.add(world,this.body);
    }
    display()  {
        var pos = this.body.position;
        push();
        if(this.body.speed<5){
           
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        
        }
    else{
        
        World.remove(world,this.body);
        this.Visisbility=this.Visisbility-0.001;
        tint(255,this.Visisbility);
        
    }
    pop();
        

    }
}
