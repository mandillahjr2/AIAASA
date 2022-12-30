// leaders
let navbar=document.getElementsByClassName('.nav__links');
navbar.forEach(element => {
    document.querySelector('#menu-btn').onclick = () =>{
        element.toggle('active');
    }
});


//end of leaders
