class Rombo{
    Dv:number;
    Dh:number;

    constructor(_Dv:number,_Dh:number){
        this.Dv= _Dv;
        this.Dh = _Dh;
    }

    area(dV:number, dH:number):number {

        var res:number = (dV*dH)/2;
        return res;
    }
}