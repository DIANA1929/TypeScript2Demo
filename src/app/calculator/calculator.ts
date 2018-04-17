interface ICalculator {
    // se declara las variables
    suma(number1: number, number2: number): number;
    resta(number1: number, number2: number): number;
}
//: es lo que va a regresar con el tipo de dato number
class Calculator implements ICalculator {
    suma(number1: number, number2: number): number {
        return number1 + number2;
    }
    resta(number1: number, number2: number): number {
        return number1 - number2;
    }

}

window.onload = function () {
    // el :ICalculator solo es para especificar que es la interfaz pero puede no ir
 //var calc: ICalculator = new Calculator();  puede estar asi: 
    var calc = new Calculator();

    console.log(`Resultado suma: ${calc.suma(1, 2)}`);
    console.log(`Resultado resta: ${calc.resta(2, 1)}`);
}