let hours;
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}/${month}/${year}`;
let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wesnesday", "Thursday", "Friday", "Saturday"];

function myFunction(){
 hours = document.getElementById("hour").innerHTML = new Date().getHours();
 document.getElementById("minutes").innerHTML =  new Date().getMinutes();
 document.getElementById("seconds").innerHTML = new Date().getSeconds();

 if(hours < 12) {
    document.getElementById("para").innerHTML = 
    "Good Morning" + " " + "Today is" + " " + daysOfTheWeek[new Date().getDay()] + " " + currentDate;
    document.getElementById("ampm").innerHTML = "AM"

} else if (hours > 12  ) {
    document.getElementById("para").innerHTML = 
   "Good Afternoon" + " " + "Today is" + " " + daysOfTheWeek[new Date().getDay()] + " " + currentDate;
    document.getElementById("ampm").innerHTML = "PM"
 }  

 if(hours > 16) {

   document.getElementById("para").innerHTML = 
   "Good Evening" + " " + "Today is" + " " + daysOfTheWeek[new Date().getDay()] + " " + currentDate; 
 }
 
 setTimeout(()=>{
    myFunction()
 }, 1000)

}

myFunction();