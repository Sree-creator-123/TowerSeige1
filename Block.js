class Box {
  constructor(x, y, width, height, color1, color2, color3){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
    World.add(world, this.body);
  }

  display() {
    push();
    fill(this.color1, this.color2, this.color3);
    translate(this.body.position.x, this.body.position.y);
    rect(0, 0, this.width, this.height);
    pop();
  }  

};
