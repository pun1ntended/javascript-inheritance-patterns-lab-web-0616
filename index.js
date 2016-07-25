//points
function Point(x, y) {
  this.x = x;
  this.y = y

}
Point.prototype.toString = function() {
  return `(${this.x}, ${this.y})`
};

//shapes
function Shape(position) {
  this.position = position;
}

Shape.prototype.addToPlane = function(x, y) {
  this.position = new Point(x, y)
};
Shape.prototype.move = function(x ,y) {
  this.position = new Point(x, y)
};
//circles
function Circle(radius, position) {
  Shape.call(this, position);
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.diameter = function() {
  var diameter;
  diameter = this.radius * 2;
  return diameter
};
Circle.prototype.area = function() {
  var area;
  area = (Math.PI * this.radius^2);
  return area
};
Circle.prototype.circumference = function() {
  var circumference;
  circumference = 2 * (Math.PI * this.radius);
  return circumference
};
//Polygons
function Side(length) {
  this.length = length
}
function Polygon(sides) {
  Shape.call(this);
  this.sides = sides;
}
Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.perimeter = function() {
  var perimeter = 0;
  this.sides.forEach(function(side){
    perimeter += side.length
  });
  return perimeter
};
Polygon.prototype.numberOfSides = function() {
  return this.sides.length

};

Quadrilateral.prototype = Object.create(Polygon.prototype);
Quadrilateral.prototype.constructor = Quadrilateral;
function Quadrilateral(length, width) {
  this.length = length;
  this.width = width;
  Polygon.call(this, [new Side(length), new Side(width), new Side(width), new Side(length)]);
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
function Rectangle(width, height) {
  Quadrilateral.apply(this, [width, height, width, height]);
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function() {
  return this.width * this.height;
};

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;
function Square(length) {
  Rectangle.apply(this, [length, length, length, length]);
  this.length = length
}

Square.prototype.listProperties = function() {
  for (var prop in this) {
    return prop + " = " + this[prop]
  }
};

Triangle.prototype = Object.create(Polygon.prototype);
Triangle.prototype.constructor = Triangle;
function Triangle(side_1, side_2, side_3) {
  this.side_1 = side_1;
  this.side_2 = side_2;
  this.side_3 = side_3;

  Polygon.apply(this, [new Side(side_1), new Side(side_2), new Side(side_3)]);

}
