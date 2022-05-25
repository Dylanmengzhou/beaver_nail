//create a month-day dictionary
var week_day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var num = ["first", "second", "third", "fourth", "fifth", "sixth"];
var month_name = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month_day = {
    "January": 31,
    "February": 28,
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31
};


//get the section by id
var content = document.getElementById("content-section");

//write the p tag into section
var p = document.createElement("p");
p.id = "month";
content.appendChild(p);


var table = document.createElement("table");
var tr_h = document.createElement("tr");
tr_h.id="week";
for (let i = 0; i < week_day.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = week_day[i];
    tr_h.appendChild(th);
    table.appendChild(tr_h);
}

for (let j = 0; j < 6; j++) {
    var tr = document.createElement("tr");
    tr.id= num[j];
    table.appendChild(tr);
    
}
content.appendChild(table);




var today = new Date();
var month = today.getMonth() + 1;
var year = today.getFullYear();


//write the title p   
var month_tag = document.getElementById("month");
month_tag.innerHTML = month_name[month - 1];


var row_num = ["first", "second", "third", "fourth", "fifth", "sixth"];
//计算出每天的是星期几
function get_week(year, month, day) {
    var date = new Date(year, month - 1, day);
    var week = date.getDay();
    return week;
}


//write the day into the table
function writeToTag(position, day) {


    var tag = document.createElement("td");
    
    if(day==""){

    }
    else{
        var text = document.createTextNode(day);
        var input = document.createElement("input");
        input.type = "radio";
        var name = year+"-"+month+"-"+day;
        input.id = "input-"+name;
        
        input.onclick = click_change(day,month,year);
        input.name = "day";
        
        input.onclick = click_change();
        var label = document.createElement("label");
        label.htmlFor = "input-"+year+"-"+month+"-"+day;
        label.id = "label-"+name;
        label.appendChild(text);
        tag.appendChild(input);
        tag.appendChild(label);

    }
    
    var element = document.getElementById(position);
    element.appendChild(tag);



}
function click_change(day,month,year){
    var lable = document.getElementsByName("label-"+year+"-"+month+"-"+day);

    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = "#label-"+year+"-"+month+"-"+day+"{color: geen;}";



}

//get a matrix for a month with position
function get_month_position(year, month, position) {
    var dayNum = month_day[position];
    var matrix = [];
    var week = get_week(year, month, 1);
    var day = 1;
    for (var i = 0; i < 6; i++) {
        matrix[i] = [];
        for (var j = 0; j < 7; j++) {
            if (i == 0 && j < week) {
                matrix[i][j] = "";
            }
            else if (day <= dayNum) {
                matrix[i][j] = day;
                day++;
            }
            else {
                matrix[i][j] = "";
            }
        }
    }
    return matrix;
}


//reduce the matrix
matrix = get_month_position(2022, month, month_name[month - 1]);
if (matrix[5][0] == "") {

    matrix.length = 5;
}


//get length of the matrix
var length = matrix.length;

for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < 7; j++) {
        var position = row_num[i];
        writeToTag(position, matrix[i][j]);

    }
}

