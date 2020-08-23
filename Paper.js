class Paper {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.3,
          friction:0.5,
          density:1.2

          
      }
      this.image = loadImage("crumbledpaper.png")
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      translate(this.image)
      rect(pos.x, pos.y, this.width, this.height);
      image(this.image, 100,675, this.width, this.height);
      
    }


  };
