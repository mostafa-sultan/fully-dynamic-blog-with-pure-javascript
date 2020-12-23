function poset(date,image,blogtitel,blogdescri,blogdescri2)  { 

//main div
var iDiv = document.createElement('div');
iDiv.className = 'card';
//data
var dateDiv = document.createElement('div');
dateDiv.className = 'card-meta-blogpost';
//dateDiv.innerHTML="Posted by Admin on 01/01/2018 in";
dateDiv.innerHTML=date;
//append date
iDiv.appendChild(dateDiv);

//image div
var imgdiv = document.createElement('div');
imgdiv.className = 'card-image';

//image in div

var img = document.createElement('img');
img.src =image; 
img.alt="Card Image";

//add image in <a> to put link
imgdiv.appendChild(img);
 
//add image div to main div
iDiv.appendChild(imgdiv);

//div 2 include text under image 
var iDiv2 = document.createElement('div');
iDiv2.className = 'card-description';

// h3 titel
var titel = document.createElement('h3');
titel.innerHTML=blogtitel;
var txt = document.createElement('p');
txt.innerHTML=blogdescri;

//add titel to div 2
iDiv2.appendChild(titel);
iDiv2.appendChild(txt);

//discription txt
var dicrip = document.createElement('p');
dicrip.innerHTML=blogdescri2;

//add discription txt to div 2
iDiv2.appendChild(dicrip);

// read more
 
 
//add dive 2 ro main div
iDiv.appendChild(iDiv2);
 
// add main div to section 1
document.getElementsByTagName('section')[0].appendChild(iDiv);
}

var id = sessionStorage.getItem("id");
console.log(id);


var data = JSON.parse(data);  

poset(data[id].date,data[id].image,data[id].titel,data[id].discription,data[id].postcontent);
 











 