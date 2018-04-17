class Calculators{
    private intputNumber1:HTMLInputElement;
    private intputNumber2:HTMLInputElement;
    private sumButton:HTMLButtonElement;
    private result:HTMLSpanElement;

    constructor(){
        this.intputNumber1 = <HTMLInputElement>document.getElementById('num1');
        this.intputNumber2 = <HTMLInputElement>document.getElementById('num2');
        this.sumButton = <HTMLButtonElement>document.getElementById('sum');
        this.result = <HTMLSpanElement>document.getElementById('result');

        this.wireEvents();

    }
wireEvents(){
    //la accion que hara la peticion al boton
    this.sumButton.addEventListener('click',event=> {
        //combierte la cadena en numerico Number (this.intputNumber1.value);
        let num1 =Number(this.intputNumber1.value);
        let num2 =Number(this.intputNumber2.value);
        this.result.innerHTML = this.suma(num1,num2).toString();

    });

}
suma(num1: number, num2:number):number{
    return num1+num2;
}

}
window.onload = function(){
    new Calculators();

}