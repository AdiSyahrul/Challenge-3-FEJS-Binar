// SOAL 1
// var emptyShip = new Ship(draft,crew);
console.log('============== SOAL 1 ==============');
function Ship(draft,crew){
    this.draft=draft;
    this.crew=crew;
}
function hitungJumlah(draft,crew){ 
    return (draft+crew*1.5);
}
let kapal = hitungJumlah (10,5);
console.log('Jumlah beban: ', kapal);
if(kapal>20){
    console.log('Banyak nih muatan kapalnya')
}
else{
    console.log('Lebih banyak muatan orangnya')
}
// END SOAL 1


// SOAL 2
console.log('\n\n============== SOAL 2 ==============');
class Animal{
    constructor(name, age, status, legs, species){
        this.name=name;
        this.age=age;
        this.status=status;
        this.legs=legs;
        this.species=species;
    }
    introduce(){
        console.log(`\nHello my name is ${this.name} and I am ${this.age} years old.`);
        console.log(`Aku merupakan ${this.species}, memiliki ${this.legs} kaki, saat ini sedang ${this.status}`);
    }
}
class Shark extends Animal{
    constructor(name, age, status){
        super(name, age, status);
        this.legs=0;
        this.species='hiu';
    }
}
let pet1 = new Shark('Bruce', '10', 'makan');
pet1.introduce();

class Cat extends Animal{
    constructor(name, age, status){
        super(name, age, status);
        this.legs=4;
        this.species='kucing';
    }
}
let pet2 = new Cat('Tom', '5', 'bermain');
pet2.introduce();

class Dog extends Animal{
    constructor(name, age, status, master){
        super(name, age, status);
        this.master=master;
        this.legs=4;
        this.species='anjing';
    }
    greetMaster(){
        console.log(`Hello ${this.master}!!`);
    }
}
let pet3 = new Dog('Scooby-Doo', '8', 'berlari' , 'Shaggy');
pet3.introduce();
pet3.greetMaster();
// END SOAL 2