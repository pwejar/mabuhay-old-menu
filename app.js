let menuPop = false;
let menudiv = document.getElementById('menuContId')
let menuOPened = 'hapana';
console.log(menudiv)
fucusScroll();
function fucusScroll() {
    const scroll = document.getElementById("menuContId");
    scroll.tabIndex = '0';
    scroll.focus();
    console.log(scroll)
}
function closeMenu() {
    console.log(menuOPened)
    if (menuOPened ==='hapana'){
        return;
    }
    checked();
}
function checked() {
    setTimeout(function(){ 
        const menulist = document.getElementById("theMunuList");
        const dot3it = document.getElementById('dot3');
        console.log('I was clicked')
        if(menuOPened != 'hapana') {
            menulist.style.opacity = "0";
            menulist.style.pointerEvents = "none";
            dot3it.style.opacity = "1";
            menuPop = false;
            menuOPened = 'hapana'
        } else {
            menulist.style.opacity = "1";
            menulist.style.pointerEvents = "all";
            dot3it.style.opacity = "0";
            menuPop = true;
            menuOPened = 'ndio';
        }
    }, 1);
   
}

function smoothScroll(target) {
    var theTarget = document.getElementById(target);
    theTarget.scrollIntoView();
    if(menuPop) {
        //checked();
    }
    
}

document.querySelectorAll('.menuBT')[0].style.backgroundColor = 'black';
document.querySelectorAll('.menuBT')[0].style.color = '#e4cc9c';


function scrollAppear(events) {
    
    var screenPosition = window.innerHeight;
    var disspia = document.querySelectorAll('.theMenu');
    var menuss = document.querySelectorAll('.menuBT');
    let index = 0 
    for( let tex of disspia) {
        var introPositon = tex.getBoundingClientRect().top;
        if(introPositon < (screenPosition* 0.5) && introPositon >-(screenPosition* 0.3)) {
            menuss.forEach(element => {
                element.style.backgroundColor = '#e4cc9c';  
                element.style.color = 'black';                  
            });
            menuss[index].style.backgroundColor = 'black'
            menuss[index].style.color = '#e4cc9c';
         } else {
            console.log('away')
         }
         index++;
    }
   
    // closeMenu();
   
}
window.addEventListener("scroll", scrollAppear,true);