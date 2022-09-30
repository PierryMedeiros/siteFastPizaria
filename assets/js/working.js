const loading = document.querySelector('#loading');
let contador = 0;

function animation(){
    contador+= 5;
    loading.style.rotate=`${contador}deg`;

    requestAnimationFrame(animation);
}
animation()