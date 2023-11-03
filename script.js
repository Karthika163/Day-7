//a.Get all the countries from Asia continent /region using Filter function
var request1 = new XMLHttpRequest();
request1.open("GET" , "https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function(){
    var data = request1.response;
   var result1 = JSON.parse(data);
   var res1 = result1.filter((x)=>x.region)
console.log(res1);
}


//Qb.Get all the countries with a population of less than 2 lakhs using Filter function
var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true)
request2.send();
request2.onload = function(){
    var data = request2.response;
   var result2 = JSON.parse(data);
   var res2 = result2.filter((x)=>x.population<200000)
   res2.map((ele)=>console.log(ele.name.common))
}


// Qc: the following details name, capital, flag, using forEach function
var request3 = new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v3.1/all",true)
request3.send();
request3.onload = function(){
    var data = request3.response;
   var result3 = JSON.parse(data);
   var res = result3.forEach((ele)=>console.log(`${ele.name.common},${ele.capital},${ele.flag}`))
}

 
 
 
 //Qd: Print the total population of countries using reduce functiongion
 var request4 = new XMLHttpRequest();
 request4.open("GET","https://restcountries.com/v3.1/all",true)
 request4.send();
 request4.onload = function(){
     var data = request4.response;
    var result4 = JSON.parse(data);
    var res4 = result4.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res4);
}   

// US dollor as currency using countries name
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data = request.response;
   var result = JSON.parse(data);
   var currency = result.filter((value)=>value.currencies && value.currencies.USD)
   currency.forEach((value)=>console.log(value.name.common))
}
