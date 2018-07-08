//6.1

class Vec{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  
  plus(vector){
    return new Vec(this.x += vector.x, this.y += vector.y);
  }
  
  minus(vector){
  	return new Vec(this.x -= vector.x, this.y -= vector.y);
  }
  
  get length(){
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5



//6.2

class Group {
  constructor(){
    this.array = [];
  }
  
  add(value){
    if(!this.has(value)){
      this.array.push(value);
    }
  }
  
  has(value){
    return this.array.includes(value);
  }
  
  delete(value){
    this.array = this.array.filter(x => x != value);
  }
  
  static from(value){
    let newgroup = new Group();
    for (let x of value){
      newgroup.add(x);
    }
    console.log(newgroup);
    return newgroup;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));