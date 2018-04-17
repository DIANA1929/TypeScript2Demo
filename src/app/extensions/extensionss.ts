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
       let dat=new Date(this.valueOf());
       return dat.toLocaleDateString();
   }
    
window.onload = function(){
    var currentDay = new Date();
    console.log(currentDay);
    console.log(currentDay.addDaysToCurrentDay(5).format());
   
}