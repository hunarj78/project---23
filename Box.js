class Box {
    constructor(x, y,height,angle) {
      var options = {
        isStatic: true,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x,y,20,150, options);
      this.width = 20
      this.height = 150;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  