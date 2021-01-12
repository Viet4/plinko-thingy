class Dividers {

    constructor(x,y,width,height){

        this.x = x;
        

        var options = {

            isStatic: true,
        }

  

            this.body = Bodies.rectangle(x,y,width,height,options);
  

        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    
    display(colour){

        fill(colour);
        rectMode(CENTER);


            rect(this.body.position.x,this.body.position.y,this.width,this.height);
        
    }
}