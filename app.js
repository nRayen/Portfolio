let navBtn = document.querySelectorAll(".nav-btn");
let pages = document.querySelectorAll(".page");

function ChangePage(){

    //Change active btn
    for(let i = 0; i < navBtn.length; i++){
        navBtn[i].addEventListener('click', () => {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.classList.remove('active-btn');

            navBtn[i].classList.add('active-btn')
        })
    }
    //Change active page
    for(let i = 0; i < pages.length; i++){
        navBtn[i].addEventListener('click', () => {
            let currentPage = document.querySelector('.active-page');
            currentPage.classList.remove('active-page');

            pages[i].classList.add('active-page')
        })
    }
}

ChangePage();

//Darkmode
    let darkswitch = document.querySelector('#darkswitch');
    let body = document.querySelector('body')

function theme(){
    darkswitch.addEventListener('change', () =>{
        if(darkswitch.checked){
            body.classList.add('dark')
            body.classList.remove('light')

        } else {
            body.classList.add('light')
            body.classList.remove('dark')
        }
    })
}


theme();