class Boxes {
    constructor(x, y,height,angle) {
      var options = {
        isStatic: true,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x,y,150,20, options);
      this.width = 150;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      strokeWeight = 2;
      stroke("red");
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  