const hamburger=document.getElementById('hamburger');
 
const navUl=document.querySelector('.navigation');

hamburger.addEventListener('click',()=>{
    if(navUl.style.left=='-100%'){
    navUl.style.left='0'}
    else{
        navUl.style.left='-100%'
    }
})
 
 
 