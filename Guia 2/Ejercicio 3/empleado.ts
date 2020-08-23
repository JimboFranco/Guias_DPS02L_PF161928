class empleado{
    nombre:string;
    salario:number;

    constructor(nom:string,sal:number){
        this.nombre= nom;
        this.salario = sal;
    }

    deducciones(sal:number):number {
        var deduc:number = 0; //No se que descuentos aplicarle
        sal = sal - deduc;
        return sal;
    }
}