const p1 = document.querySelector (".htmlcls");
const p2 = document.querySelector(".csscls");
const p3 = document.querySelector(".jscls");
const box = document.querySelector (".box");
const htmltxt = document.querySelector(".htmltxt");
const csstxt = document.querySelector(".csstxt");
const jstxt = document.querySelector(".jstxt");


p1.addEventListener("click", ()=>{
    htmltxt.style.display = "block";
    csstxt.style.display = "none";
    jstxt.style.display = "none";
   

});

p2.addEventListener("click", ()=>{

    htmltxt.style.display = "none";
    csstxt.style.display = "block";
    jstxt.style.display = "none";
   
});

p3.addEventListener("click", ()=>{
    htmltxt.style.display = "none";
    csstxt.style.display = "none";
    jstxt.style.display = "block";

});

