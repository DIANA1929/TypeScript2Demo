class Car {

    private _engine: string;

    constructor(engine: string){
        this._engine = engine;
    }

    starEngine(){
        alert(`Start engine ${this._engine}`);
    }

    stopEngine(){
        alert(`Stop engine ${this._engine}`);
    }
}
//ejecuta
window.onload = function(){
    //var quiere decir variables anonimas 
    //let la variable solo funciona en el bloque que se esta declarando, por ejemplo cuando una variable lef se utiliza en un for, o en un metodo pero solo queda vivo en ese "bloque" 
    var car = new Car('V8');
    car.starEngine();
    car.stopEngine();
}