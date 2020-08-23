class calculadora{
    numero1:number;
    numero2:number;

    constructor(num1:number,num2:number){
        this.numero1=num1;
        this.numero2=num2;
    }

    suma(num1:number, num2:number):void {
        var res = num1 + num2;
        console.log(res);
    }
    resta(num1:number, num2:number):void {
        var res = num1 - num2;
        console.log(res);
    }
    multi(num1:number, num2:number):void {
        var res = num1 * num2;
        console.log(res);
    }
    divi(num1:number, num2:number):void {
        var res = num1 / num2;
        console.log(res);
    }
}