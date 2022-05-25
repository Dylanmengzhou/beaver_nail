

var timeZone = document.getElementById("time-zone");


var time1 = document.createElement("div");
time1.id = "time_1";
time1.className = "box";
var i1 = document.createElement("i");
var input_1 = document.createElement("input");
var label_1 = document.createElement("label");
input_1.type = "radio";
input_1.id = "input-1";
input_1.name = "time";
label_1.htmlFor = "input-1";
i1.innerHTML = "11";
var i2 = document.createElement("i");
i2.innerHTML = "13";
label_1.appendChild(i1);
label_1.appendChild(document.createTextNode(" ~ "));
label_1.appendChild(i2);

time1.appendChild(input_1);
time1.appendChild(label_1);



var time2 = document.createElement("div");
time2.id = "time_2";
time2.className = "box";
var i1 = document.createElement("i");
var input_2 = document.createElement("input");
var label_2 = document.createElement("label");
input_2.type = "radio";
input_2.id = "input-2";
input_2.name = "time";
label_2.htmlFor = "input-2";
i1.innerHTML = "13";
var i2 = document.createElement("i");
i2.innerHTML = "15";
label_2.appendChild(i1);
label_2.appendChild(document.createTextNode(" ~ "));
label_2.appendChild(i2);
time2.appendChild(input_2);
time2.appendChild(label_2);

var time3 = document.createElement("div");
time3.id = "time_3";
time3.className = "box";
var i1 = document.createElement("i");
var input_3 = document.createElement("input");
var label_3 = document.createElement("label");
input_3.type = "radio";
input_3.id = "input-3";
input_3.name = "time";
label_3.htmlFor = "input-3";
i1.innerHTML = "15";
var i2 = document.createElement("i");
i2.innerHTML = "17";
label_3.appendChild(i1);
label_3.appendChild(document.createTextNode(" ~ "));
label_3.appendChild(i2);
time3.appendChild(input_3);
time3.appendChild(label_3);




timeZone.appendChild(time1);
timeZone.appendChild(time2);
timeZone.appendChild(time3);

main.appendChild(timeZone);