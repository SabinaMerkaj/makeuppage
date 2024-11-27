let navbar= document.querySelector(".navbar");
console.log(navbar)
window.onscroll = ()=>{
    let heightWindow= window.pageYOffset;
    console.log(heightWindow);
    if(heightWindow>50){
        navbar.style.backgroundColor="#e0b4d7"
    }
}