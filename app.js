"use strict";

const archivo = document.getElementById("archivo");
var result = document.querySelector(".result");
//var documentFragment = document.createDocumentFragment();

archivo.addEventListener("change",()=>{
    readFile(archivo.files);
});


const readFile = (ar) => {

    for (var i of ar) {
        const reader = new FileReader();
        reader.readAsDataURL(i);
        
        reader.addEventListener("load",(e)=>{
            var img = document.createElement("IMG");
            img.src = e.currentTarget.result;
            result.appendChild(img);
        });
    };
};

