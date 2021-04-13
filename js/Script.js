function colorblue_setValues(){
    dropdowns = document.getElementsByTagName("select");
    for(i=0;i<dropdowns.length;++i){
        for(j=0;j<256;j++){
            var option = document.createElement("option");
            option.text = option.value = j;
            dropdowns[i].appendChild(option);
        }
    }
}
function rgb(){
    var red = document.getElementsByClassName("red");
         for (var i = 0; i < red.length; i++) {
            red[i].style.color = 'red';
            }
    var green = document.getElementsByClassName("green");
         for (var i = 0; i < green.length; i++) {
            green[i].style.color = 'green';
            }
    var blue = document.getElementsByClassName("blue");
         for (var i = 0; i < blue.length; i++) {
            blue[i].style.color = 'blue';
            }
    
}
 
function cmy(){
    var cyan = document.getElementsByClassName("cyan");
         for (var i = 0; i < cyan.length; i++) {
            cyan[i].style.color = 'cyan';
            }
    var magenta = document.getElementsByClassName("magenta");
         for (var i = 0; i < magenta.length; i++) {
            magenta[i].style.color = 'magenta';
            }
    var yellow = document.getElementsByClassName("yellow");
         for (var i = 0; i < yellow.length; i++) {
            yellow[i].style.color = 'yellow';
            }
    
}
 
function displayRGBColor(){
    var red,green, blue, rval, gval, bval, redfloat, greenfloat, bluefloat, float, hexadecimal,color, table, tbody, tr;
    table = document.getElementById("output");
    tbody = document.createElement("tbody");
    var data = [];
    red = document.getElementById("r");
    green = document.getElementById("g");
    blue = document.getElementById("b");
    rval = Number(red.options[red.selectedIndex].value);
    gval = Number(green.options[green.selectedIndex].value);
    bval = Number(blue.options[blue.selectedIndex].value);
    redfloat =(rval/255).toFixed(2);
    greenfloat = (gval/255).toFixed(2);
    bluefloat = (bval/255).toFixed(2);
	integer="("+rval+","+gval+","+bval+")";
    color='rgb'+integer;
    float = "(" + redfloat + "," + greenfloat + "," + bluefloat + ")";
    hexadecimal = "#"+rval.toString(16)+gval.toString(16)+bval.toString(16);
	clr=["white","white",color];
    data.push(float);
    data.push(hexadecimal);
    data.push('');
    tr = document.createElement("tr");
    for(i=0;i<data.length;++i){
        td=document.createElement("td");
        td.setAttribute("class","text-center");
		td.style.backgroundColor=clr[i];
        cell=document.createTextNode(data[i]);
        td.appendChild(cell);
        tr.appendChild(td);    
    }
    tbody.appendChild(tr);
    output.appendChild(tbody);
}
 
function displayCMYColor() {
    var red, green, blue, redval, greenval, blueval, redfloat, greenfloat, bluefloat, float, hexadecimal, color, table, tbody, tr;
    table = document.getElementById("output");
    tbody = document.createElement("tbody");
	
    var data = [];
    red = document.getElementById("c");
    green = document.getElementById("m");
    blue = document.getElementById("y");
	
    redval = 255-Number.parseInt(red.options[red.selectedIndex].value);
    greenval =255-Number.parseInt(green.options[green.selectedIndex].value);
    blueval = 255-Number.parseInt(blue.options[blue.selectedIndex].value);
	
    redfloat = Number((redval / 255).toFixed(2));
    greenfloat = Number((greenval / 255).toFixed(2));
    bluefloat = Number((blueval / 255).toFixed(2));
	
	integer="("+redval+","+greenval+","+blueval+")";
    color='rgb'+integer;
    float = "(" + redfloat + "," + greenfloat + "," + bluefloat + ")";
    hexadecimal = "#" + redval.toString(16) + greenval.toString(16) + blueval.toString(16);
		clr=["white","white",color];
    data.push(float);
    data.push(hexadecimal);
    data.push('');
    tr = document.createElement("tr");
    for (i = 0; i < data.length; ++i) {
        td = document.createElement("td");
        td.setAttribute("class", "text-center");
		td.style.backgroundColor=clr[i];
        cell = document.createTextNode(data[i]);
        td.appendChild(cell);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    output.appendChild(tbody);
}

function generateRandomColors() {
    let k;
    for(k=0; k<10; ++k)
    {
    var red, green, blue, redfloat, greenfloat, bluefloat, floatvalue, hdredno,hdgreenno, hdblueno,  hdvlaue, color, table, tbody, tr;
    output = document.getElementById('output');
    tbody = document.createElement('tbody');
    var data = [];
    red =Math.round(Math.random()*255);
    green =Math.round(Math.random()*255);
    blue = Math.round(Math.random()*255);
    redfloat = (red/255).toFixed(2);
    redfloat = redfloat.toString();
    greenfloat = (green/255).toFixed(2);
    greenfloat = greenfloat.toString();
    bluefloat = (blue/255).toFixed(2);
    bluefloat = bluefloat.toString();
    floatvalue = "(" + redfloat + ", " + greenfloat + ", " + bluefloat + ")";
    hdredno = red.toString(16).toUpperCase();
    hdgreenno = green.toString(16).toUpperCase();
    hdblueno = blue.toString(16).toUpperCase();
    hdvalue = "#" + hdredno + hdgreenno + hdblueno;
    color = 'rgb(' + [red,green,blue].join(',') + ')';
    clr=["#d1ecf1","#d1ecf1",color];
    data.push(floatvalue);
    data.push(hdvalue);
    data.push('');
    tr = document.createElement('tr');
    for(i=0;i<data.length;++i){
        td = document.createElement('td');
        td.setAttribute('class', 'text-center');
        td.style.backgroundColor=clr[i];
        cell = document.createTextNode(data[i]);   
        td.appendChild(cell);
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    output.appendChild(tbody);   
    }
}

function displaySafeColors(){
    let r,g,b;
    table=document.getElementById('output');
    tbody=document.createElement('tbody');
    hex=["00","33","66","99","CC","FF"];
    for(r=0;r<6;r++){
       for(g=0;g<6;g++){
        row=document.createElement('row');
           for(b=0;b<6;b++){
            clr="#"+hex[r]+hex[g]+hex[b];
            let td = document.createElement('td');
            td.setAttribute('class','text-center');
            td.style.backgroundColor=clr;
            td.style.borderRadius="8px";
            td.style.borderCollapse="separate";
            td.style.borderSpacing="0px";
            let cell= document.createTextNode(clr);
            td.appendChild(cell);
            row.appendChild(td);
           }
           tbody.appendChild(row);
       }
   }   
   table.appendChild(tbody);
}
