// Dong goi
class Animal{
    constructor(type, height){
        this.type=type
        this.height=height
    }

    show(){
        console.log(`This is  ${this.type} cao ${this.height}`);
    }
}
let DOG = new Animal("Dog","1m")
DOG.show()


// ke thua
 class Cat extends Animal{
    constructor(type,height,name){
        super(type,height)
        this.name=name
    }

    
 }