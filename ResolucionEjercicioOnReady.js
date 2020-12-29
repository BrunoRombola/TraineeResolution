process.stdin.resume();
process.stdin.setEncoding('utf8');


class Car{
    constructor(brand, model, cylinderCapacity, doorsQuantity, price){
        this.brand = brand;
        this.model = model;
        this.cylinderCapacity = cylinderCapacity;
        this.doorsQuantity = doorsQuantity;
        this.price = price;
    }
}

var car1 = new Car("Peugeot","206","140cc",4,200000);
var car2 = new Car("Honda","Titan","125cc",4,60000);
var car3 = new Car("Peugeot","208","170cc",5,250000);
var car4 = new Car("Yamaha","YBR","160cc",4,80500.5);
var vehicles = new Array(car1,car2,car3,car4);

class Concessionaire{
    constructor(cars){
        this.cars = cars;
    }
    showCars(){
        this.cars.forEach(car=>{
            let {brand,model,cylinderCapacity,doorsQuantity,price} = car
            let carData = this.cars.indexOf(car)%2 === 0 ? `Puertas: ${doorsQuantity}`: `Cilindrada: ${cylinderCapacity}`;
            console.log(`Marca: ${brand} // Modelo: ${model} // ${carData} // Precio: ${price}`);
        })
        
        console.log("================================");
    }
    showExpensiveAndCheaper(){
        this.cars.sort((a,b)=>b.price-a.price);
        console.log(`Vehiculo más caro: ${this.cars[0].brand} ${this.cars[0].model}`);
        console.log(`Vehiculo más barato: ${this.cars[this.cars.length-1].brand} ${this.cars[this.cars.length-1].model}`);

    }
    modelWithLetterY(){
        this.cars.forEach((car)=>{
            let {brand,model,cylinderCapacity,doorsQuantity,price} = car;
            if(car.model.toUpperCase().includes('Y')){
                console.log(`Vehículo que contiene la letra Y en el modelo:  ${brand} ${model} ${price}`);
            }
        });
        console.log("================================");
    }

    showOrganizedByPrice(){
        this.cars.sort((a,b)=>b.price-a.price);
        console.log("Vehiculos ordenados de mayor a menor: ");
        this.cars.forEach((car)=>{
            let {brand,model,cylinderCapacity,doorsQuantity,price} = car;
            console.log(`${brand} ${model}`);
            })
    }

}
var concessionaire = new Concessionaire(vehicles);
concessionaire.showCars();
concessionaire.showExpensiveAndCheaper();
concessionaire.modelWithLetterY();
concessionaire.showOrganizedByPrice();