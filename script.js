let stars =document.getElementById('stars');
let moon =document.getElementById('moon');
let mountains =document.getElementById('mountains');
let mountains4 =document.getElementById('mountains4');
let boat6 =document.getElementById('boat6');
let river5 =document.getElementById('river5');
let nouvil =document.querySelector('.nouvil');


window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *3 + 'px';
    mountains.style.top = value *1.5 + 'px';
    mountains4.style.top = value *1.5 + 'px';
    boat6.style.left = value *1.5 + 'px';
    river5.style.top = value *1.5 + 'px';
    nouvil.style.fontSize = value + 'px';

    if(scrollY >=67){
        nouvil.style.fontSize = 67 + 'px';
        nouvil.style.position = 'fixed';
        if(scrollY >=478){
            nouvil.style.display = '';
        }

    }


}