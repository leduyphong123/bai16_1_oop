let Date = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        document.write("day =" + this.day + "<br/>");
    }
    this.getMonth = function () {
        document.write("month = " + this.month + "<br/>");
    }
    this.getYear = function () {
        document.write("year = " + this.year + "<br/>");
    }
    this.setDay = function (newDay) {
        this.day = newDay;
    }
    this.setMonth = function (newMonth) {
        this.month = newMonth;
    }
    this.setYear = function (newYear) {
        this.year = newYear;
    }
    this.setDate = function (newDay, newMonth, newYear) {
        this.day = newDay;
        this.month = newMonth;
        this.year = newYear;
    }
    this.toString = function () {
        document.write("date:" + this.day + "/" + this.month + "/" + this.year);
    }
}
// function Date(day,month,year){
//     this.day=day;
//     this.month=month;
//     this.year=year;
//     this.getDay = function(){
//         document.write("day =" +this.day+"<br/>");
//     }
//     this.getMonth = function(){
//         document.write("month = " + this.month+"<br/>");
//     }
//     this.getYear = function(){
//         document.write("year = " + this.year+"<br/>");
//     }
//     this.setDay = function(newDay){
//         this.day=newDay;
//     }
//     this.setMonth = function(newMonth){
//         this.month =  newMonth;
//     }
//     this.setYear = function(newYear){
//         this.year = newYear;
//     }
//     this.setDate=function (newDay,newMonth,newYear){
//         this.day=newDay;
//         this.month=newMonth;
//         this.year=newYear;
//     }
//     this.toString= function (){
//         document.write("date:" +this.day+"/"+this.month+"/"+this.year);
//     }
// }

let test = new Date(12, 3, 2020);
test.getDay();
test.getMonth();
test.getYear();

test.setDay(3);
test.getDay();

test.setMonth(10);
test.getMonth();

test.setYear(2022);
test.getYear();

test.setDate(19, 4, 2023);
test.toString();