function dataset(id,image,blogtitel,blogdescri,urlblog)  { 

//main div
var iDiv = document.createElement('div');
iDiv.className = 'card';

//image div
var imgdiv = document.createElement('div');
imgdiv.className = 'card-image';

//image in div
 
var img = document.createElement('img');
//................
img.src =image; 
img.alt="Card Image";
 

//add to imgdiv
imgdiv.appendChild(img);

//add image div to main div
iDiv.appendChild(imgdiv);

//div 2 include text under image 
var iDiv2 = document.createElement('div');
iDiv2.className = 'card-description';

// h3 titel
var titel = document.createElement('h3');
//...................................
titel.innerHTML=blogtitel;

//add titel to div 2
iDiv2.appendChild(titel);

//discription txt
var dicrip = document.createElement('p');
//....................................
dicrip.innerHTML=blogdescri;

//add discription txt to div 2
iDiv2.appendChild(dicrip);

// read more
var link = document.createElement('a');
//........................
link.href=urlblog;
link.className ='btn-readmore';
link.innerHTML="read more";
 //_________________________________
 
 //g = document.createElement('div');
link.setAttribute("id", id);
 link.onclick = function(id) {
console.log(id);
alert(id);
}
//add read more to div2
iDiv2.appendChild(link);

//add dive 2 ro main div
iDiv.appendChild(iDiv2);
 
// add main div to section 1
document.getElementsByTagName('section')[0].appendChild(iDiv);
}
//dataset("img/1.jpg","mostafa","discrip","blogpost.html");
//dataset("img/1.jpg","mostafa","discrip","blogpost.html");
//dataset(image,blogtitel,blogdescri,urlblog)
var data = JSON.parse(data);
//console.log(data[0].id); 
dataset(data[0].id,data[0].image,data[0].titel,data[0].discription,data[0].link);
dataset(data[1].id,data[1].image,data[1].titel,data[1].discription,data[1].link);
dataset(data[2].id,data[2].image,data[2].titel,data[2].discription,data[2].link);
dataset(data[3].id,data[3].image,data[3].titel,data[3].discription,data[3].link);
dataset(data[4].id,data[4].image,data[4].titel,data[4].discription,data[4].link);
dataset(data[5].id,data[5].image,data[5].titel,data[5].discription,data[5].link);
dataset(data[6].id,data[6].image,data[6].titel,data[6].discription,data[6].link);
dataset(data[7].id,data[7].image,data[7].titel,data[7].discription,data[7].link);


var element = document.getElementById("0");
element.onclick = function(event) {
sessionStorage.setItem("id", 0);
}
var element = document.getElementById("1");
element.onclick = function(event) {
sessionStorage.setItem("id", 1);
}
var element = document.getElementById("2");
element.onclick = function(event) {
sessionStorage.setItem("id", 2);
}

var element = document.getElementById("3");
element.onclick = function(event) {
sessionStorage.setItem("id", 3);
}

var element = document.getElementById("4");
element.onclick = function(event) {
sessionStorage.setItem("id", 4);
}

var element = document.getElementById("5");
element.onclick = function(event) {
sessionStorage.setItem("id", 5);
}
 
var element = document.getElementById("6");
element.onclick = function(event) {
sessionStorage.setItem("id", 6);
}

var element = document.getElementById("7");
element.onclick = function(event) {
sessionStorage.setItem("id", 7);
}