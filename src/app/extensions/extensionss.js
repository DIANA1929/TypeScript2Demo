Date.prototype.addDaysToCurrentDay = function (days) {
    let dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};
Date.prototype.format = function () {
    let fecha = new Date(this.valueOf());
    let dia = fecha.getDate();
    let mes = 1 + fecha.getMonth();
    let anio = fecha.getFullYear();
    let fechaform = `${dia}/${mes}/${anio}`;
    return fechaform;
};
window.onload = function () {
    var currentDay = new Date();
    console.log(currentDay);
    console.log(currentDay.addDaysToCurrentDay(5).format());
    console.log(currentDay.format());
};
