let navBtn = document.querySelectorAll(".nav-btn");
console.log(navBtn)

function btns(){
    for(let i = 0; i < navBtn.length; i++){
        navBtn[i].addEventListener('click', () => {
            let currentBtn = document.querySelector('.active-btn');
            currentBtn.classList.remove('active-btn');

            navBtn[i].classList.add('active-btn')
        })
    }
}

btns();