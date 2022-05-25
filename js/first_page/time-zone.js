

var timeZone = document.getElementById("time-zone");


var time1 = document.createElement("div");
time1.id = "time_1";
time1.className = "box";
var p = document.createElement("p");
var i1 = document.createElement("i");
i1.innerHTML = "11";
var i2 = document.createElement("i");
i2.innerHTML = "13";
p.appendChild(i1);
p.appendChild(document.createTextNode(" ~ "));
p.appendChild(i2);
time1.appendChild(p);


var time2 = document.createElement("div");
time2.id = "time_2";
time2.className = "box";
var p = document.createElement("p");
var i1 = document.createElement("i");
i1.innerHTML = "13";
var i2 = document.createElement("i");
i2.innerHTML = "15";
p.appendChild(i1);
p.appendChild(document.createTextNode(" ~ "));
p.appendChild(i2);
time2.appendChild(p);


var time3 = document.createElement("div");
time3.id = "time_3";
time3.className = "box";
var p = document.createElement("p");
var i1 = document.createElement("i");
i1.innerHTML = "15";
var i2 = document.createElement("i");
i2.innerHTML = "17";
p.appendChild(i1);
p.appendChild(document.createTextNode(" ~ "));
p.appendChild(i2);
time3.appendChild(p);

timeZone.appendChild(time1);
timeZone.appendChild(time2);
timeZone.appendChild(time3);

main.appendChild(timeZone);