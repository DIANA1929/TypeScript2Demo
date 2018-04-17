interface Date{
    addDaysToCurrentDay(days: number): Date;
    format():string;
}

Date.prototype.addDaysToCurrentDay =function (days: number): Date{
    //this. tu objeto cuatscnto vales ejemplo: Date ('10/10/2018')
   let dat=new Date (this.valueOf());
   dat.setDate(dat.getDate()+days);
   return dat;
   
   }
Date.prototype.format=function():string{
    let fecha=new Date(this.valueOf());
    let dia=fecha.getDate();
    let mes=1+ fecha.getMonth();
    let anio=fecha.getFullYear();

    let fechaform=`${dia}/${mes}/${anio}`

    //let format=' '+dia+ ' '+mes+ ' ' +anio;
    return fechaform;
    
}
   /*Date.prototype.format=function():string{
       let dat=new Date(this.valueOf());
       return dat.toLocaleDateString();
   }*/
    
window.onload = function(){
    var currentDay = new Date();
    console.log(currentDay);
    console.log(currentDay.addDaysToCurrentDay(5).format());
    console.log(currentDay.format());
   
}